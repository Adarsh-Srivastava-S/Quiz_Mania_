import { LocationStrategy } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';

// import * as pdfMake from "pdfmake/build/pdfMake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
// const htmlToPdfmake = require("html-to-pdfmake");
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


  qid: any;
  questions: any=[{content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
  quiz:{
    qId:'',
  },}]

  marksGot:any;
  correctAnswers:any;
  score:any;
  id:any;
  user1:any
  uid:any;
  leaderboard1:any={
    score:'',


    user:{
      id:'',
    },
    quiz:{
      qId:'',
    },

  }
maximumMarks:any;
  attempted :any;
  isSubmit=false;
  timer: any;

  constructor(
    private locationSt:LocationStrategy,
    private _route:ActivatedRoute,
    private _question:QuestionService,
    private _leaderboard:LeaderboardService,
    private login:LoginService,
    private _http:HttpClient
  ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params['qid'];
    this.uid=this.login.userId();
    console.log(this.qid);
    this.loadQuestions();
    this.leaderboard1.user.id=this.login.userId();
    // this.leaderboard1.image.user.id=this.login.userId();
    this.leaderboard1.quiz.qId=this.qid;

  }
  exitFullscreen(){
    if(document.exitFullscreen){
      document.exitFullscreen();
    }
  }
  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe
    ((data:any)=>{
      this.questions = data;

      this.timer=this.questions.length*2*60;

      // this.questions.forEach((q: any) => {
      //   q['givenAnswer'] = '';
      // });
      console.log(this.questions);
      this.startTimer();
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error","Error in loading questions of quiz","error");
    });
  }

  preventBackButton()
  {
      history.pushState(null, location.href);
      this.locationSt.onPopState(()=>{
        history.pushState(null,location.href);
      });
    }

    submitQuiz()
    {
      Swal.fire({
        title: 'Do you want to Submit the Quiz?',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        icon:'info',
      }).then((e)=>{
        if(e.isConfirmed)
        {  this.setScore();
            this.evalQuiz();

        }

      });
    }

    // start timer

    startTimer()
    {
      let t:any = window.setInterval(()=>{
        //code
        if(this.timer<=0)
        {
          this.evalQuiz();
          clearInterval(t);
        }else{
          this.timer--;
        }
      },1000);
    }

    getFormattedTime()
    {
      let mm=Math.floor(this.timer/60);
      let ss = this.timer-mm*60;
      return `[${mm} min : ${ss} sec]`;
    }

    evalQuiz()
    {
       //calculation
      //  this.setScore();

      //  call to server  to check question
        //  this._question.getScore(this.questions)
         this._question.evalQuiz(this.questions).subscribe(
          (data:any)=>{
            console.log(data);
            this.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
            //  this.leaderboard1.score = parseFloat(Number(data.marksGot).toFixed(2));

            this.maximumMarks=data.maxMarks;

            this.correctAnswers = data.correctAnswers;
            this.attempted = data.attempted;
            this.isSubmit = true;
            // only for testing
            this.user1=this.login.getUser();

          },
          (error)=>{
            console.log(error);
          }

         );

    }
    leader()
    {
      this._leaderboard.addLeaderboard(this.leaderboard1).subscribe(
        (data)=>{
     // this.question.answer=''
        this.leaderboard1={
          score:'',


          user:{
            id:'',
          },
          quiz:{
            qId:'',
          },

        };

      },
      (error)=>{

      }
      );
    }
     setScore()
     {
 this._question.getScore(this.questions).subscribe(
  (data:any)=>{
    console.log(data);

     this.leaderboard1.score =data;

     console.log(this.leaderboard1);



  },
  (error)=>{
    console.log(error);
  }

 );
     }
    // printPage()
    // {
    //   window.print();
    // }
    // printPage1() {
    //   const doc = new jsPDF();
    //   doc.fromHTML(window.document.getElementById('printable-content'), 15, 15);
    //   const pdfBlob = doc.output('blob');
    //   const formData = new FormData();
    //   formData.append('pdf', pdfBlob, 'printed-page.pdf');
    //   // Use your backend API endpoint to send the PDF file
    //   // For example:
    //   // this.http.post('https://example.com/api/print', formData).subscribe();
    // }

  // public exportPDF() {
  //   const pdfTable = this.pdfTable.nativeElement;
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
  //   const documentDefinition = { content: html };
  //    pdfMake.createPdf(documentDefinition);
  // }
  @ViewChild('printableContent') printableContent!: ElementRef;

printPage() {
  const printableContent = document.getElementById('printableContent');
  if (printableContent) {
    window.print();
    html2canvas(printableContent).then(canvas=>{
      const htmlContent = canvas.toDataURL("Data");
      console.log(htmlContent);
      const data={
        userid:this.uid,

        name:htmlContent.substring("data:image/png;base64,".length)
      }
      console.log(data.name);
      // https://api.quizmania.live
      this._http.post('https://api.quizmania.live/pdf/submit-pdf', data).subscribe(response => { console.log('Certificate sent successfully'); }, error => {
        //  this._http.post('http://localhost:9005/pdf/submit-pdf', data).subscribe(response => { console.log('Certificate sent successfully'); }, error => {

console.error('Error sending certificate',error);

});

});

    //   fetch('http://localhost:9005/pdf/submit-pdf', {
    //      method: 'POST',
    //      body: data
    //    })
    //      .then(response => response.text())
    //      .then(data => console.log(data))
    //      .catch(error => console.error(error));
    //  });
    // }
    // // const documentDefinition = { content: htmlContent };

    // // pdfMake.createPdf(documentDefinition).getBlob((pdfBlob) => {
    // //   const userId = this.login.userId();
    // //   const formData = new FormData();
    // //   formData.append('pdf', pdfBlob, 'my-document.pdf');
    // //   formData.append('userid', userId.toString());

    //   // perform an HTTP request with the formData object as the payload, e.g.:


  }
}
}
