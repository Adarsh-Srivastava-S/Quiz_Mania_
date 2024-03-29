import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  user:any;
  qId: any;
  qTitle: any;

  // if generate error then check karna video 31,32,33...
  questions=[
{
  quesId:'',
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
}];
  constructor(
    private _route:ActivatedRoute,
    private _login:LoginService,
    private _question:QuestionService,
    private _snak:MatSnackBar
    ) { }

  ngOnInit(): void {
    this.user=this._login.getUserRole();
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      console.log(data);
      this.questions=data;
    },(error)=>{
      console.log(error);
    });
  }

  // delete question
  deleteQuestion(qid: any)
  {
    Swal.fire({
      icon:'info',
      showCancelButton: true,
      confirmButtonText: 'Delete', 
      title:'Are you sure , want to delete this question?'   
    }).then((result)=>{
      if(result.isConfirmed)
      {
        // confirm
        this._question.deleteQuestion(qid).subscribe(
          (data)=>{
          this._snak.open('Question Deleted','',{
            duration:3000,
          });
          this.questions = this.questions.filter((q)=>q.quesId != qid)
        },
        (error)=>{
          this._snak.open('Error in deleting questions','',{
            duration:3000,
          });
          console.log(error);
        });
      }
    });
  }
}
