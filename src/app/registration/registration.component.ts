import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myregisterform:FormGroup |any

  constructor(private httpserv:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.myregisterform=new FormGroup({
      firstName:new FormControl("",Validators.required),
      lastName:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      contactno:new FormControl("",[Validators.required,Validators.minLength(10)]),
      password:new FormControl("",Validators.required),
      confirmPass:new FormControl("",Validators.required),
      gender:new FormControl("",Validators.required),
      hobby:new FormControl("")
    })
  }
  submit(){
    console.log(this.myregisterform.value)
    this.httpserv.postuserData(this.myregisterform.value)
    this.router.navigate(["./address"])
   

  }
}
