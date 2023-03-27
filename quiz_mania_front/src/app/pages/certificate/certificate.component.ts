import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title="Certificate of Achievement"
  quizTitle="Quiz Mania"
  participant="John Doe"
 score="10/10"
  

}
