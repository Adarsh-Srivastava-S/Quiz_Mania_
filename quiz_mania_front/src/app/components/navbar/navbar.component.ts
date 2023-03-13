import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;
  constructor(public login:LoginService,public quiz:QuizService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) =>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }
  
  // if create any problem then here you make change
  public logout()
  {
    this.login.logout();
    this.isLoggedIn=false;
    this.user=null;
    window.location.reload();   
    // this.login.loginStatusSubject.next(false);
  }
}
