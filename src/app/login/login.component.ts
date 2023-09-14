import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myloginform:FormGroup | any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.myloginform=new FormGroup({
      email:new FormControl("",Validators.required), 
      password:new FormControl("",Validators.required), 
    })
  }
  submit(){
    console.log(this.myloginform.value)
    this.router.navigate(["./dashboard"])
  }

}
