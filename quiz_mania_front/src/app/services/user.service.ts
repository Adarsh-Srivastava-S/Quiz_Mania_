import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) 
  { 

  }

  // add user
  public addUser(user: any)
{
   return this.http.post(`${baseUrl}/user/`,user, {observe:'response'})
}
public addCoordinator(user: any)
{
   return this.http.post(`${baseUrl}/user/coordinator`,user, {observe:'response'})
}
public updateUser(user:any)
{
  return this.http.post(`${baseUrl}/user/update`,user, {observe:'response'})
}
public allCoordinator()
{
  return this.http.get(`${baseUrl}/user/allcoordinator`);
}
public allUser()
{
  return this.http.get(`${baseUrl}/user/alluser`);
}
public getUser(username:any)
{
  return this.http.get(`${baseUrl}/user/${username}`);

}
 
}
