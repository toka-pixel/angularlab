import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookfinderService} from '../bookfinder.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


 public alldata=[];

 name:any;

  constructor(private router:Router,private bookservice:BookfinderService) {
    // this.bookservice.getList().subscribe((data)=>{
    //   this.alldata=data.items;
     
    // });
   }

  ngOnInit(): void {
   


  }
  //  title :string;
  searchbook(){
    this.name = document.getElementById('books');
    if(this.name.value != ''){
      this.name = this.name.value;
      this.bookservice.setdata(this.name);
      this.bookservice.getList().subscribe({
        next: (data) => {
          data['items'].forEach(element => {
            // console.log(element.volumeInfo.title);
          });
          this.alldata = data.items;
        },
        error(msg) {
          console.log('error: ', msg);
        }
      });

    }
   
  }
 

}
