import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(
    private userServic:UserService,
    private snack:MatSnackBar,
    private _route:ActivatedRoute,
    private _router:Router) { }
    
    visible:boolean = true;
    changetype:boolean = true;
    viewpass(){
      this.visible = !this.visible;
      this.changetype = !this.changetype;
    }

  uploadedImage: File | any;  

  dbImage: any; 
  status: any;
  postResponse: any;
  successResponse: string | any;
  id : any;

  
  public user:any;
  ngOnInit(): void { 

this.id=this._route.snapshot.params['id'];
this.userServic.getUser(this.id).subscribe(
  (data:any)=>{
    this.user=data;
    this.uploadedImage=null;
    // this.uploadedImage=this.user.image;
    console.log(this.user);
  },
  (error)=>{
    console.log(error);
  }
);

  }



  formSubmit()
  {
     console.log(this.user);
    //  if(this.user.username=='' || this.user.username==null)
    //  {
    //   // alert('User is required..')
    //   //used to show alert message very atractive manner
    //   this.snack.open('Username is required !!','',{
    //     duration:3000,
    //     verticalPosition:'top',
    //     horizontalPosition:'right'
    //   });
    //   return;
    //  }
     const imageFormData = new FormData();
    
    console.log(imageFormData);
   
    // const req = new FormData();
    // req.append('img', this.uploadedImage);
    // req.append('User',JSON.stringify(this.user))
    const formData = new FormData();
    
    formData.append('img', this.uploadedImage);
    
    formData.append('username', this.user.username);
    formData.append('id', this.user.id);
    formData.append('discription', this.user.discription);
    formData.append('github', this.user.github);
    formData.append('instagram', this.user.instagram);
    formData.append('password', this.user.password);
    formData.append('firstName', this.user.firstName);
    formData.append('lastName', this.user.lastName);
    formData.append('email', this.user.email);
    formData.append('phone', this.user.phone);
    const boundary = Math.random().toString().substr(2);
   
    // console.log(req);
    this.userServic.updateUser(formData).subscribe(
      (data:any)=>{
        //suucess
        console.log(data);
        // alert('success');
        Swal.fire('Successfully done','User id is'+ data.id,'success');
      },
      (error)=>{
        //error
        console.log(error);
        // alert('Somthing went wrong');
        this.snack.open('Somthing went wrong !!','',{
          duration:3000,
        });
      }
    );
  }

  public onImageUpload(event:any) {    
    this.uploadedImage = event.target.files[0];
     }

}
