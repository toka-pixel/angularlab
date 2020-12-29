import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input('name') name;
@Output() onEmitValues= new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  handleEventEmit(){
    this.onEmitValues.emit(" i changed from child");
  }


}
