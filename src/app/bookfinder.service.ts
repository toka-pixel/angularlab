import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookfinderService {
 alldata :any;
  constructor(private http:HttpClient) { }

  getList(): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes',
    {
      // params:this.alldata
      params:{q:this.alldata}
    });
  }
  
  setdata(event){
    this.alldata=event;
  }  

}
