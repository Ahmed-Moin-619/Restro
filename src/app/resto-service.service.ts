import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoServiceService {

  constructor(private http:HttpClient){}
  
  url="http://localhost:3000/restaurents";
  
  getList()
  {
    return this.http.get(this.url)
  }

  saveResto(data:any)
  {
    return this.http.post(this.url,data)
  }

  deletResto(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id:any)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  collectionUpdate(id:any, data:any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  
  

}
