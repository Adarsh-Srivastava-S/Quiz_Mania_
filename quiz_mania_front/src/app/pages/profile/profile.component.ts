import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/ImageService/image.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})


export class ProfileComponent implements OnInit {


  
  user = null;
  constructor(public login:LoginService,private img:ImageService) { }
  dbImage: any; 
  id : any;
  postResponse: any;


  ngOnInit(): void {
    

    this.user=this.login.getUser();
    this.viewImage();
    
    // used to get data from server
    // this.login.getCurrentUser().subscribe(
    //   (user:any)=>{
    //     this.user = user;
    //   },
    //   (error)=>{
    //     alert("error");
    //   }
    // )
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
