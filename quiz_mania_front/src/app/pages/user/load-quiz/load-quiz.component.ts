import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  b: any;
  catId: any;
  leader:any;
  quizzes: any;
  id:any;
  flag=false;
  
  constructor( private _route:ActivatedRoute, private _quiz:QuizService,private _login:LoginService,private _leader:LeaderboardService) { }

  ngOnInit(): void {
    this.id=this._login.userId();
    this._route.params.subscribe((params)=>{
      this.catId = params['catId'];
      if(this.catId==0)
      {
        console.log("Load all the quiz");

         this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
             this.quizzes = data;
             console.log(this.quizzes);
             this._leader.getLeaderByUser(this.id).subscribe(
              (data:any)=>{
                this.leader=data;
                console.log(this.leader);
              },(error)=>{
                alert("error in loading leader data");
              }
            );
          },(error)=>{
            console.log(error);
            alert('error in loading all quizzes');
          }
          );
      }else{
        console.log("Load specific quiz");
       
      
        
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.log(this.quizzes);
            this._leader.getLeaderByUser(this.id).subscribe(
              (data:any)=>{
                this.leader=data;
                console.log(this.leader);
              },(error)=>{
                alert("error in loading leader data");
              }
            );
           
          },(error)=>{
            alert("error in loading quiz data");
          }
        );
      }
     
    });
  }
  user(){
  this.id=this._login.userId();
  console.log(this.id);
 return this.id;

}
setFlagvalue()
  {
    this.flag = true;
    

  }

  public hasUserCompletedQuiz(q:any): boolean {
   this.b=this.leader.some((l: { user: { id: any; }; quiz: { qId: any; maxMarks: any;}; score:any; }) => ((l.user.id == this._login.userId() && l.quiz.qId == q) && (l.quiz.maxMarks>=(l.score/3))));
    return this.b;
  }

  

}