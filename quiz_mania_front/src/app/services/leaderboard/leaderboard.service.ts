import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http:HttpClient) { }

  // adding score and user in leaderboard 
  public addLeaderboard(leaderboard1:any)
  {
    return this.http.post(`${baseUrl}/leaderboard/`,leaderboard1);
  }
public getLeaderByUser(uid:any)
{
  return this.http.get(`${baseUrl}/leaderboard/leaderboard/user/${uid}`);
}
  // getting leaderboard by quizes
  public getLeaderboard(qId:any)
  {
    return this.http.get(`${baseUrl}/leaderboard/leaderboard/all/${qId}`);
  }
}
