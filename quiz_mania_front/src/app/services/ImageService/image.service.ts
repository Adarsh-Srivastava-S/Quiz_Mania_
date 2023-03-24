import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _http:HttpClient ) { }
  public addImage(Image:any  ){
    return this._http.post(`${baseUrl}/upload/image`,Image , {observe:'response'});
  }
  public showImage(id: any){
    

    return this._http.get(`${baseUrl}/get/image/info/${id}`);
  }
}