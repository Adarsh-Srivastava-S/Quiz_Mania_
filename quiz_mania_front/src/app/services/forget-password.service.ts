import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  

  constructor(private _http:HttpClient) { }
  public getOtp(user: any){
    return this._http.post(`${baseUrl}/forget/password`,user, {observe:'response'});
  }
  public validateOtp(otp: any){
    return this._http.post(`${baseUrl}/forget/validate`,otp, {observe:'response'});
  }
  public changePass(chpass: any){
    return this._http.post(`${baseUrl}/forget/change-password`,chpass, {observe:'response'});
    
  }
}
