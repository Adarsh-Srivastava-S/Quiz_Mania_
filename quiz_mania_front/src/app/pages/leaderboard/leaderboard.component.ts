import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  leaderboardData: MatTableDataSource<LeaderboardElement>;

  constructor() {
    this.leaderboardData = new MatTableDataSource([
      { position: 1, name: 'John', score: 100  },
      { position: 2, name: 'Sarah', score: 90  },      
       { position: 3, name: 'David', score: 80  },
      { position: 4, name: 'Emily', score: 70  },
      { position: 5, name: 'Michael', score: 60 },
    ]);
  }

  ngOnInit(): void {
  }
}