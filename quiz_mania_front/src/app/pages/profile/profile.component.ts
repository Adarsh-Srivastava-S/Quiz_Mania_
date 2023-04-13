import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/ImageService/image.service';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['position','category','quiz','name', 'score'];


  user ={
    image:{
      id:'',
      image:'',
    },
    discription:'',
  };
  constructor(private user1:UserService ,public login:LoginService,private img:ImageService,private _leader:LeaderboardService) { }
  dbImage: any; 
  id : any;
  leader:any;
  i:any;
  postResponse: any;
  showContent= false;


  ngOnInit(): void {
    this.user1.getUser(this.login.getUser().username).subscribe(
      (data:any)=>{
        this.user=data;
        // this.i=this.leader.length;
        console.log(this.user);
        this.dbImage = 'data:image/jpeg;base64,' + this.user.image.image;


      },(error)=>{
        alert("error in loading leaderboard data");
      }
    );
    this.id=this.login.userId();
    // this.viewImage();
      
        this._leader.getLeaderByUser(this.id).subscribe(
          (data:any)=>{
            this.leader=data;
            this.i=this.leader.length;
            console.log(this.leader);

          },(error)=>{
            alert("error in loading leaderboard data");
          }
        );
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
