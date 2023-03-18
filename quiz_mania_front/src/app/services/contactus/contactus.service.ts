import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private _http:HttpClient) { }
  public addContactus(contactus:any){
    return this._http.post(`${baseUrl}/contact/add`,contactus);
  }
  public showContact(request: any){
    const params=request;

    return this._http.get(`${baseUrl}/contact/page`,{params})
  }
}


