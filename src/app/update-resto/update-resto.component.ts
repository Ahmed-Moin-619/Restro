import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoServiceService } from '../resto-service.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert:boolean=false;
  editResto=new FormGroup ({
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    adress:new FormControl('',[Validators.required])
  })

  get name()
  {
    return this.editResto.get('name')
  }
  get email()
  {
    return this.editResto.get('email')
  }
  get adress()
  {
    return this.editResto.get('adress')
  }

  constructor(private activaterouter:ActivatedRoute, private resto:RestoServiceService, private router:Router){}
  ngOnInit(): void {
    console.log(this.activaterouter.snapshot.params['id'])
    this.resto.getCurrentResto(this.activaterouter.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result)
      this.editResto=new FormGroup ({
        name:new FormControl(result['name']),
        email: new FormControl(result['email']),
        adress:new FormControl(result['adress'])
      })
    })
  }
  collection()
  {
    console.warn("item",this.editResto.value)
    this.resto.collectionUpdate(this.activaterouter.snapshot.params['id'],this.editResto.value).subscribe((result)=>{
      console.log(result)
      this.alert=true
    })
    this.editResto.reset({});
    this.router.navigate(['/list'])
  }
  updateAlert()
  {
    this.alert=false;
  }
}
