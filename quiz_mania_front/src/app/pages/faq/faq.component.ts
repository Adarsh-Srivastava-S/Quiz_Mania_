import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq/faq.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit(): void {
    let request:{[key:string]:any}={};
    request['pageNumber']="1";
    request['pageSize'] ="5";


    this.getFaq(request);
  }
  private getFaq(request:any)
  {
    this.faq.showFaq(request)
    .subscribe(data=>{
      this.faqs=data;
      //  this.totalElements=data['totalElements'];
      // this.loading=false;
      console.log(this.faqs);
    },
    ()=>{
      // this.loading=false;
    });


  }
  nextPage(event:PageEvent){
    let request:{[key:string]:any}={};
    request['pageNumber']=event.pageIndex;
    request['pageSize'] =event.pageSize;
    this.getFaq(request);

  }


}
