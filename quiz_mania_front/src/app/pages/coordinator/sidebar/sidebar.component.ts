import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-sidebar-coordinator',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn = false;
  user = null;
  constructor(public login:LoginService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) =>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }
  
 
  public logout()
  {
    this.login.logout();
    this.isLoggedIn=false;
    this.user=null;
    window.location.reload();   
    // this.login.loginStatusSubject.next(false);
  }


}
