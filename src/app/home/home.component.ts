import { Component } from '@angular/core';
import { RestoServiceService } from '../resto-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private resto:RestoServiceService){}

  collection:any=[];
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.log(result)
      this.collection=result
    })
  }

}
