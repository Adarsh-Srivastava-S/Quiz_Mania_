import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';
import html2canvas from 'html2canvas'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  onlineDate: Date = new Date();
    title="Certificate of Achievement"
  quizTitle="Quiz Mania"
  participant="John Doe"
 score="10/10"
 leader:any;
  id:any;
  username:any;
  constructor( private _http:HttpClient, private _route:ActivatedRoute,private _leader:LeaderboardService) { }

  ngOnInit(): void {
 this._route.params.subscribe((params)=>{
      this.id = params['uid'];
      this._leader.getLeaderByUser(this.id).subscribe(
        (data:any)=>{
          this.leader=data;
          this.username=this.leader.user.username;
          console.log(this.leader);
        },(error)=>{
          alert("error in loading leader data");
        }
      );

  })
}
@ViewChild('printableContent') printableContent!: ElementRef;

printPage() {
  const printableContent = document.getElementById('printableContent');
  if (printableContent) {
  
    html2canvas(printableContent).then(canvas=>{
      const htmlContent = canvas.toDataURL("Data");
      console.log(htmlContent);
      const data={
        userid:this.id,
        
        name:htmlContent.substring("data:image/png;base64,".length)
      }
      console.log(data.name);
      // https://api.quizmania.live
      this._http.post('https://api.quizmania.live/pdf/submit-pdf', data).subscribe(response => { console.log(response); }, error => {
      //  this._http.post('http://localhost:9005/pdf/submit-pdf', data).subscribe(response => { console.log(response); }, error => {

console.error('Error sending certificate',error);

});

});
  }
}
Mail() {
  const printableContent = document.getElementById('printableContent');
  if (printableContent) {
    
    html2canvas(printableContent).then(canvas => {
      const htmlContent = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.href = htmlContent;
      link.download = 'myImage.png';
      document.body.appendChild(link);
      link.click();
    });
     
  }

}
}