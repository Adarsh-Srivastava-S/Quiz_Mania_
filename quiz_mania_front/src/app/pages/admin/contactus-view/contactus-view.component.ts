import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus/contactus.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-contactus-view',
  templateUrl: './contactus-view.component.html',
  styleUrls: ['./contactus-view.component.css']
})
export class ContactusViewComponent implements OnInit  {
  contactus:any;
constructor(private contact:ContactusService){}
  

ngOnInit(): void {
  let request:{[key:string]:any}={};
  request['pageNumber']="0";
  request['pageSize'] ="5";



  this.getContact(request);
}
private getContact(request:any)
{
  this.contact.showContact(request)
  .subscribe(data=>{
    this.contactus=data;
    // //  this.totalElements=data['totalElements'];
    // // this.loading=false;
    console.log(this.contact);
  },

  ()=>{
    // this.loading=false;
  });

}
nextPage(event:PageEvent){
  let request:{[key:string]:any}={};
  request['pageNumber']=event.pageIndex;
  request['pageSize'] =event.pageSize;
  this.getContact(request);

}
}