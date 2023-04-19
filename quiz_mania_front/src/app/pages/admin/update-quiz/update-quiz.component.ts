import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _login:LoginService,
    private _quiz:QuizService,
    private _cat:CategoryService,
    private _router:Router) { }
  role:any;
  qId = 0;
  quiz: any;
  categories: any;
  ngOnInit(): void {
    this.role=this._login.getUserRole();
     this.qId = this._route.snapshot.params['qid'];
    //  alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    );
    this._cat.categories().subscribe((data:any)=>{
      this.categories = data;
    },error=>{
      alert("error in loading  categories");
    } 
    );
  }

  //update form submit
  public updateData()
  {
    //validation
    if(this.role=='ADMIN')
    {
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data)=>{
        Swal.fire('Success !!','quiz updated','success').then((e)=>{
          this._router.navigate(['/admin/quizzes']);
        });
      },
      (error)=>{
        Swal.fire('Error','error in loading quiz','error');
        console.log(error);
      }
    );
    }
    else if(this.role=='COORDINATOR')
    {
      this._quiz.updateQuiz(this.quiz).subscribe(
        (data)=>{
          Swal.fire('Success !!','quiz updated','success').then((e)=>{
            this._router.navigate(['/coordinator/quizzes']);
          });
        },
        (error)=>{
          Swal.fire('Error','error in loading quiz','error');
          console.log(error);
        }
      );
    }
  }
}
