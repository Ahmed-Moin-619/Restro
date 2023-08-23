import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { RestoServiceService } from '../resto-service.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent {

alert:boolean=false;

  addResto=new FormGroup ({
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    adress:new FormControl('',[Validators.required])
  })

  get name()
  {
    return this.addResto.get('name')
  }
  get email()
  {
    return this.addResto.get('email')
  }
  get adress()
  {
    return this.addResto.get('adress')
  }

  resetResto()
  {
    this.addResto.reset()
  }

  collectResto()
  {
    if(confirm("Are you sure")){
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      console.log(result)
      this.alert=true
    })
    this.addResto.reset({});
 }
}

 success()
 {
  this.alert=false
 }
  constructor(private resto:RestoServiceService){}
}
