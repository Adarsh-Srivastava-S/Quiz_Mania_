import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/ImageService/image.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private httpClient: HttpClient,private login:LoginService ,private img:ImageService) { }
  uploadedImage: File | any;  
  dbImage: any; 
  status: any;
  postResponse: any;
  successResponse: string | any;
  image: any;
  id : any;
  user:any;
  images = 
        {
          user : {
            'id': ''
          },

          name : '',
          type:'',
          image:''
       };

  public onImageUpload(event:any) {    
    this.uploadedImage = event.target.files[0];
    this.images.image= this.uploadedImage;
    this.images.name = this.uploadedImage.name;
  }


  imageUploadAction() {    
    const imageFormData = new FormData();
     const userId = this.login.userId();
    console.log(imageFormData);
    const req = new FormData();
    req.append('img', this.uploadedImage, this.uploadedImage.name);
    req.append('userid', userId.toString());
  
    // Generate a boundary string using Math.random()
    const boundary = Math.random().toString().substr(2);
  
    // this.httpClient.post('http://localhost:9005/upload/image', req, {
  
    //   observe: 'response'
    // }
    this.img.addImage(req).subscribe((
  response) => {
      if (response.status === 200) { 
          this.postResponse = response;                
          this.successResponse = this.postResponse.body.message;
      } else {
          this.successResponse = 'Image not uploaded due to some error!';
      }
  });
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


  ngOnInit(): void {

  }

}
