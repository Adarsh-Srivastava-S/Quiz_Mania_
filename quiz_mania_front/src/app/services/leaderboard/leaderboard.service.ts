import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http:HttpClient) { }

  // adding score and user in leaderboard 
  public addLeaderboard(leaderboard:any)
  {
    return this.http.get(`${baseUrl}/leaderboard/`,leaderboard);
  }

  // getting leaderboard by quizes
  public getLeaderboard(qId:any)
  {
    return this.http.get(`${baseUrl}/leaderboard/leaderboard/all/${qId}`);
  }
}
