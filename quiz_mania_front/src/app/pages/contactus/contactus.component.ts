import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactusService } from 'src/app/services/contactus/contactus.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent  {

  constructor(private contactusService:ContactusService, private _route:ActivatedRoute) { }
  con= {
    name:'',
    email:'',
    subject:'',
    content:'',
  };
  ngOnInit(): void {
  }
  formSubmit()
  {
    if(this.con.content.trim()=='' || this.con.content==null)
    {
      return;
    }
    if(this.con.email.trim()=='' || this.con.email==null)
    {
      return;
    }

    if(this.con.subject.trim()=='' || this.con.subject==null)
    {
      return;
    }
    if(this.con.name.trim()=='' || this.con.name==null)
    {
      return;
    }
    this.contactusService.addContactus(this.con).subscribe(
      (data)=>{
      Swal.fire('Success','Thanks for Contacting us ','success');
      this.con=
      {
        name:'',
        email:'',
        subject:'',
        content:'',
      };
    },
    (error)=>{
      Swal.fire('Error','Error in add contact us','error');
    }
    );
  
}
}
