import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // profileForm:FormGroup;

  constructor( private fb:FormBuilder, private _router: Router) {
 
   }

  ngOnInit(): void {
  
  }

  profileForm = new FormGroup({
    name: new FormControl('toka',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.pattern('[A-Za-z0-9]')]),
    gender: new FormControl('',Validators.required),
  });


  Submitme(){
   
    if (this.profileForm.valid) {
     
        this._router.navigate(['/']);  
  
    }
     
  }
}
