import{HttpClient}from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class HttpService{
    myDatabaseUrl:string | any='https://user-registration-53164-default-rtdb.firebaseio.com/registrationdata.json'
    constructor(private http:HttpClient){    }
    postuserData(userdata:any){
        console.log(userdata);
   this.http.post(this.myDatabaseUrl,userdata).subscribe((data:any)=>{
     console.log(data)
    
    })
    // return this.http.post(this.myDatabaseUrl,userdata);
}
putData(data:any){
    // this.http.put('https://user-registration-53164-default-rtdb.firebaseio.com/registrationdata/',data).subscribe((data:any)=>{
        console.log(data)
    // })
}
}