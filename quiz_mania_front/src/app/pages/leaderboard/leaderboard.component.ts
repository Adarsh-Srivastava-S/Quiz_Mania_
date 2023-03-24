import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/ImageService/image.service';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';

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

   displayedColumns: string[] = ['position', 'name', 'score'];
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
      id:''
    },
  }
]

  category=[{
cid:"",
title:"",
  }]
  constructor(private _route:ActivatedRoute,private _category:CategoryService,private _quiz:QuizService,private _leader:LeaderboardService,private login:LoginService,private img:ImageService) {

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
            this.id=this.leader[0].user.id;
            console.log(this.leader);
            console.log(this.id);
          },(error)=>{
            alert("error in loading leaderboard data");
          }
        );
  }
  viewImage(Id:any) {
    
    // const userId = this.login.userId();
    // let req:{[key:string]:any}={};
    // this.id=userId;
    // const params=req;
    // this.httpClient.get(`http://localhost:9005/get/image/info/${this.id}`)
    this.img.showImage(Id)  
    .subscribe(
       ( res) => {
          this.postResponse = res;          
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }

  }
