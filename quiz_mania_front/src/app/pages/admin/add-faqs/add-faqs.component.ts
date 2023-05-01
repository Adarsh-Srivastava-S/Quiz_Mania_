import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaqService } from 'src/app/services/faq/faq.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-faqs',
  templateUrl: './add-faqs.component.html',
  styleUrls: ['./add-faqs.component.css']
})
export class AddFaqsComponent implements OnInit {

  faq ={
    content:'',
    answer:'',

  };
  constructor(private _route:ActivatedRoute,
    private _faq:FaqService) { }

  ngOnInit(): void {

  }
  formSubmit()
  {
    if(this.faq.content.trim()=='' || this.faq.content==null)
    {
      return;
    }
    if(this.faq.answer.trim()=='' || this.faq.answer==null)
    {
      return;
    }
    this._faq.addFaq(this.faq).subscribe(
      (data)=>{
      Swal.fire('Success','FAQ Added. Add Another one','success');
      this.faq=
      {
        content:'',
        answer:''
      };
    },
    (error)=>{
      Swal.fire('Error','Error in adding FAQ','error');
    }
    );
  }

}
