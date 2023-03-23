import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private httpClient: HttpClient,private login:LoginService) { }
  uploadedImage: File | any;  
  dbImage: any; 
  postResponse: any;
  successResponse: string | any;
  image: any;
  id : any;
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
    this.images.user.id = this.login.userId();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
  
     console.log(imageFormData);
    this.httpClient.post('http://localhost:9005/upload/image', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) { 
          this.postResponse = response;                
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    }

  viewImage() {
    this.httpClient.get('http://localhost:9005/get/image/info/' + this.image)
      .subscribe(
        res => {
          this.postResponse = res;          
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }


  ngOnInit(): void {
  }

}
