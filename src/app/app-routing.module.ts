import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './address/address.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'address',component:AddressComponent},
  {path:'education',component:EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
