import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/ImageService/image.service';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export interface LeaderboardElement {
  position: number;
  name: string;
  score: number;

}
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

   displayedColumns: string[] = ['position', 'image','name', 'score'];
  // leaderboardData: MatTableDataSource<LeaderboardElement>;
  categories:any;
  catId:any;
  cid:any;
  // leader:any;
  qId:any;
  quizzes:any;
  dbImage: any;
  postResponse: any;
  id : any;
leader=[
  {
    user:{
      id:'',
      image:{
        id:'',
        image:'',
        name:'',
      }
    }
  }
]

  category=[{
cid:"",
title:"",
  }]
window: any;
  constructor(private _sanitizer:DomSanitizer,private _route:ActivatedRoute,private _category:CategoryService,private _quiz:QuizService,private _leader:LeaderboardService,private login:LoginService,private img:ImageService) {

  }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{

        console.log(data);
        this.category=data;


      },
      (error)=>{

      }
      );
      // this.Quiz();
  }

  Quiz(cat:any)
  {


    this.catId=cat;
    console.log(this.catId);
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.log(this.quizzes);
          },(error)=>{
            alert("error in loading quiz data");
          }
        );
      }

  Leaderboard(qid:any)
  {
    this.qId=qid;
    console.log(this.qId);
        this._leader.getLeaderboard(this.qId).subscribe(
          (data:any)=>{
            this.leader=data;
            //  this.id=this.leader[0].user.id;
            // this.dbImage = 'data:image/jpeg;base64,' + ;

            console.log(this.leader);

          },(error)=>{
            alert("error in loading leaderboard data");
          }
        );
  }
  viewImage(Id: any): string {
    if (!Id) {
      return '';
    }

    this.img.showImage(Id).subscribe(
      (res) => {
        this.postResponse=res
        const base64Image = 'data:image/jpeg;base64,' + this.postResponse.image;
        return base64Image;
      }
    );

    return '';
  }

  getImageUrl(id: any): string {
    return this.viewImage(id);
  }

  // viewImage(Id:any) {

  //   // const userId = this.login.userId();
  //   // let req:{[key:string]:any}={};
  //   // this.id=userId;
  //   // const params=req;
  //   // this.httpClient.get(`http://localhost:9005/get/image/info/${this.id}`)
  //   if(this.leader.length)
  //   this.img.showImage(Id)
  //   .subscribe(
  //      ( res) => {
  //         this.postResponse = res;
  //         this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
  //       }
  //     );
  // }
  // getLeaderImage(leader: any): string {
  //   return 'data:image/jpeg;base64,' + leader.image.image;
  // }


  getSanitizedImage(image: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${image}`);
  }

  }
