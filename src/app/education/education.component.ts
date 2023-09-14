import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  myeducationform:FormGroup |any
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.myeducationform=new FormGroup({
      educationType:new FormControl("",Validators.required),
      passingYear:new FormControl("",Validators.required),
      schoolName:new FormControl("",Validators.required),
      percentage:new FormControl("",Validators.required),
    })
  }
  submitData(){
    this.router.navigate(['./login'])
  }

}
