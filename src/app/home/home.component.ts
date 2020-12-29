import { Component, OnInit } from '@angular/core';
// import {} from '@angular/form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:string ="Hello Angular lecture 2";

today: object=new Date();

  constructor() { }

  ngOnInit(): void {
  }

  handleform(form){
    console.log(form);
  }

  handleEmitValues($event){
    console.log($event);
    this.name=$event;
  }

}
