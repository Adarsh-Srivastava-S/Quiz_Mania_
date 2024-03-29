import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
    {
      cid:7,
      title:'PROGRAMMING',
      description:'this is testing categoreis'
    },
    {
      cid:7,
      title:'GK',
      description:'this is testing categoreis'
    },
    {
      cid:7,
      title:'PRACTICE',
      description:'this is testing categoreis'
    }
    
  ];
  constructor(private _category:CategoryService ) { }

  ngOnInit(): void {

    this._category.categories().subscribe((data:any)=>{
      //css
      this.categories = data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','Error in loding data','error');
    });
  }

  deleteCategory(cId: any)
  {
    Swal.fire({
      icon:'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        //delete...
      
        this._category.deleteCategory(cId).subscribe(
          (data)=>{
            this.categories = this.categories.filter((category)=>category.cid!=cId);
          Swal.fire('Success','Category deleted','success');
          },
        (error)=>{
          Swal.fire('Error','Error in deleting category','error');
        });
      }
    });
  }
}
