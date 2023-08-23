import { Component, OnInit } from '@angular/core';
import { RestoServiceService } from '../resto-service.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoServiceService){}

  collection:any=[];
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.log(result)
      this.collection=result
    })
  }

  deletRestoItem(item:any)
  {
    if(confirm("Are you sure")){
    console.log(this.collection)
    this.collection.splice(item-1,1)

    this.resto.deletResto(item).subscribe((result)=>{
      console.log(result)
    })
  }
}
}
