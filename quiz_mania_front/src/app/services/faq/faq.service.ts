import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private _http:HttpClient) { }
  public addFaq(faq:any){
    return this._http.post(`${baseUrl}/faqs/add`,faq);
  }
  public showFaq(request: any){
    const params=request;

    return this._http.get(`${baseUrl}/faqs/faqpage`,{params})
  }
}
