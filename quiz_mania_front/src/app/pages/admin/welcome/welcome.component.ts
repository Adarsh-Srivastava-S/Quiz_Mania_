import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
user:any;
quizzes:any;
categories:any;
coordinator:any;
  constructor(private _user:UserService,private _quiz:QuizService,private _cat:CategoryService) { }

  ngOnInit(): void {
this._user.allUser().subscribe(
  (data:any)=>{
    this.user=data;
    console.log(this.user);
  },(error)=>{
    alert("error in loading leaderboard data");
  }
);
this._user.allCoordinator().subscribe(
  (data:any)=>{
    this.coordinator=data;
    console.log(this.user);
  },(error)=>{
    alert("error in loading leaderboard data");
  }
);

this._quiz.getActiveQuizzes().subscribe(
  (data:any)=>{
     this.quizzes = data;
    //  this._leader.getLeaderByUser(this.id).subscribe(
    //   (data:any)=>{
    //     this.leader=data;
    //     console.log(this.leader);
    //   },(error)=>{
    //     alert("error in loading leader data");
    //   }
    // );
  },(error)=>{
   
   
  }
  );
  this._cat.categories().subscribe((data:any)=>{
    this.categories = data;
  },
  (error)=>{},
  );
}
}



