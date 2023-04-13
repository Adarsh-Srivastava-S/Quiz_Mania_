import { Component, OnInit, } from '@angular/core';
import { ImageService } from 'src/app/services/ImageService/image.service';
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
  constructor(public login:LoginService,public quiz:QuizService, private img:ImageService ) { }

  dbImage: any; 
  id : any;
  postResponse: any;
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
   
    this.login.loginStatusSubject.asObservable().subscribe((data) =>{
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
      this.viewImage();
   
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
 
  
  viewImage() {
    
    const userId = this.login.userId();
    let req:{[key:string]:any}={};
    this.id=userId;
    const params=req;
    // this.httpClient.get(`http://localhost:9005/get/image/info/${this.id}`)
    this.img.showImage(this.id)  
    .subscribe(
       ( res) => {
          this.postResponse = res;          
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }
 
 
 }
 


