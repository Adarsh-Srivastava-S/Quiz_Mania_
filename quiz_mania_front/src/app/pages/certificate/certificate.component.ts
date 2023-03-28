import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  onlineDate: Date = new Date();
  constructor(private leader:LeaderboardService) { }

  ngOnInit(): void {
  }

  title="Certificate of Achievement"
  quizTitle="Quiz Mania"
  participant="John Doe"
 score="10/10"
  

}
