import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgetPasswordComponent } from '../forget/forget-password/forget-password.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userloginData ={
    username:'',
    password:''
  };

  constructor( public dialog:MatDialog,private snack:MatSnackBar, public login:LoginService, private router:Router)

   {}
   visible:boolean = true;
   changetype:boolean = true;
   viewpass(){
     this.visible = !this.visible;
     this.changetype = !this.changetype;
   }

  ngOnInit(): void {
  }
 public formSubmit(){
    console.log("login btn clicked");

    if(this.userloginData.username.trim()=='' || this.userloginData.username==null){
        this.snack.open('Username is required !! ','',{
                 duration: 3000,
        });
        return;
  }
    if(this.userloginData.password.trim()=='' || this.userloginData.password==null){
        this.snack.open('Password is required !! ','',{
                 duration: 3000,
        });
        return;
  }

  //request to server to generate token
    this.login.generateToken(this.userloginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);

        //login.....
         this.login.loginUser(data.token);
         this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            //redirect ...ADMIN: admin dashboard
            //redirect ...NORMAL:normal user dashboard
             if(this.login.getUserRole()=='ADMIN')
             {
              //admin dashboard
              // window.location.href='/admin';
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            }
            else if(this.login.getUserRole()=='NORMAL')
            {
              //normal user dashboard
              // window.location.href='/user-dashboard';
              this.router.navigate(['user-dashboard/0']);
              this.login.loginStatusSubject.next(true);
             }else if(this.login.getUserRole()=='COORDINATOR')
             {
              this.router.navigate(['coordinator']);
              this.login.loginStatusSubject.next(true);
             }
             else{
                this.login.logout();
             }
          });
      },
      (error)=>{
        console.log('Error !');
        console.log(error);
        // this.snack.open("Invalid Details !! Try again",'',{
        //   duration:3000,
        // })
        Swal.fire({
          title: 'Invalid Details !! Try Again?',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          icon:'info',
        })
      }
      );
  }
  handleForgetAction(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(ForgetPasswordComponent,dialogConfig)
  }
}
