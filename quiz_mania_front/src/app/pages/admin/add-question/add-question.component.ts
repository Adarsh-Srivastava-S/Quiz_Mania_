import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  // constructor(private _router:ActivatedRoute,private _question:QuestionService, private _rout:Router){}
  
  user:any;
  qId="";
  qTitle="";
  question = {
    
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      qId:'',
    },
  };
  flag=false;

  constructor(private _route:ActivatedRoute,
    private _question:QuestionService,
  
    private _login:LoginService) { }
    public Editor = ClassicEditor;

  ngOnInit(): void {
    
   this.user= this._login.getUserRole();
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz['qId']= this.qId;
  }
 addNextQuest()
 {
  location.reload();
//   this.qId = this._route.snapshot.params['qid'];
//   this.qTitle = this._route.snapshot.params['title'];
//   this.question.quiz['qId']= this.qId;
 }
  formSubmit()
  {
    if(this.question.content.trim()=='' || this.question.content==null)
    {
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null)
    {
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option2==null)
    {
      return;
    }
    if(this.question.answer.trim()=='' || this.question.answer==null)
    {
      return;
    }

    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data)=>{
      Swal.fire('Success','Question Added. Add Another one','success');
      this.flag=true;
      // this.question.answer=''
      this.question=
      {
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:'',
      quiz:{
        qId:''
      },

      };

    },
    (error)=>{
      Swal.fire('Error','Error in adding question','error');
    }
    );
    // this.location.go(this.location.path());
   
  }
  
}