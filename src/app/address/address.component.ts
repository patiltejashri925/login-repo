import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../shared/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  myAddressInfo:FormGroup |any

  constructor(private httpserv:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.myAddressInfo=new FormGroup({
      country:new FormControl("",Validators.required),
      state:new FormControl("",Validators.required),
      city:new FormControl("",Validators.required),
      address1:new FormControl("",Validators.required),
      address2:new FormControl("",Validators.required),
      location:new FormControl("",Validators.required),
      zipcode:new FormControl("",Validators.required)
    })
  }
  submit(){
    console.log(this.myAddressInfo.value)
    // this.httpserv.putData(this.myAddressInfo.value)
    this.router.navigate(['./education'])

    
  }
}
