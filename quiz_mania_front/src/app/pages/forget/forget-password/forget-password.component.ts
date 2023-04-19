import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ForgetPasswordService } from 'src/app/services/forget-password.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidateOtpComponent } from '../validate-otp/validate-otp.component';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

 username:any;
forgetPasswordForm: any = FormGroup;
enterOtpForm: any = FormGroup;

user:any;
responseMessage:any;
flag=false;
flag2=false;
flag3=false;

constructor(private formBUilder:FormBuilder,private _forget:ForgetPasswordService,
  private dialog:MatDialog,
  public dialogRef:MatDialogRef<ValidateOtpComponent> ,
 private ngxService:NgxUiLoaderService, private snackbarService:MatSnackBar)
   {}
  ngOnInit(): void {
    this.forgetPasswordForm = this.formBUilder.group({
      username:'',
      otp:'',
      chPass:'',
      coPass:'',
    });
   
  }
  


handleSubmit()
{
  const formData = new FormData();
    
   this.ngxService.start();
   this.username = this.forgetPasswordForm.value.username;
   formData.append('username', this.username);
   
  // this.username=FormData.username,

// this._forget.getOtp(this.username).subscribe((response:any)=>{

// this.ngxService.stop();
// this.responseMessage = response?.message;
// this.dialogRef.close();
// this.snackbarService.open(this.responseMessage,"");
// },(error)=>{
//    this.ngxService.stop();
// if(error.error?.message){
//     this.responseMessage = error.error?.message;
// }

// this.snackbarService.open(error);
// })
this._forget.getOtp(formData).subscribe((response:any) => {
  this.ngxService.stop();
 this.user=response;
  this.responseMessage = response?.message;
  // this.dialogRef.close();
  
  this.snackbarService.open(this.responseMessage, '');
  // this.handleForgetAction();
  

}, (error) => {
  this.ngxService.stop();
  if (error.error?.message) {
    this.responseMessage = error.error?.message;
  } else {
    this.responseMessage = 'An error occurred. Please try again later.';
  }
  this.snackbarService.open(this.responseMessage, '');
});

}

handleValidate()
{
  const formData = new FormData();
    
  this.ngxService.start();
  this.username = this.forgetPasswordForm.value.username;
  formData.append('username', this.username);
  this.username = this.forgetPasswordForm.value.otp;
  formData.append('enterotp', this.username);
  this._forget.validateOtp(formData).subscribe((response:any) => {
  this.ngxService.stop();
  this.flag2=response.body;
 this.user=response;
  this.responseMessage = response.body.message;
  // this.dialogRef.close();
  
  this.snackbarService.open(this.responseMessage, '');
  // this.handleForgetAction();
  

}, (error) => {
  this.ngxService.stop();
  if (error.error?.message) {
    this.responseMessage = error.error?.message;
  } else {
    this.responseMessage = 'An error occurred. Please try again later.';
  }
  this.snackbarService.open(this.responseMessage, '');
});


}
handleChangePassword()
{
  const formData = new FormData();
    
  this.ngxService.start();
  this.username = this.forgetPasswordForm.value.username;
  formData.append('username', this.username);
  this.username = this.forgetPasswordForm.value.chPass;
  formData.append('ch-pass', this.username);
  this.username = this.forgetPasswordForm.value.coPass;
  formData.append('co-pass', this.username);
  this._forget.changePass(formData).subscribe((response:any) => {
  this.ngxService.stop();
 this.user=response;
  this.responseMessage = response.body.message;
  // this.dialogRef.close();
  if(response.body.success){
  this.snackbarService.open(this.responseMessage, '');
  }
  // this.handleForgetAction();
  

}, (error) => {
  this.ngxService.stop();
  if (error.error?.message) {
    this.responseMessage = error.error?.message;
  } else {
    this.responseMessage = 'An error occurred. Please try again later.';
  }
  this.snackbarService.open(this.responseMessage, '');
});


}
flag1()
{
  this.flag=true;
  this.flag3=true;
}
flag4()
{
  this.flag=false;

}
// handleForgetAction(){
//   const dialogConfig=new MatDialogConfig();
//   dialogConfig.width="550px";
//   this.dialog.open(ForgetPasswordComponent,dialogConfig)
// }
}
