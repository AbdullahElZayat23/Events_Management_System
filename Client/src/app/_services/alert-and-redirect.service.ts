import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertAndRedirectService {
   register ="register";
   login= "login";
  constructor(public route:Router) { }

  ValidateMessage(message:any,location:string):boolean {
    if(!(message.data['message']!=null&&message.data['message']!=undefined)){
      return true;
    }
    //login
    if(message.data.message.includes("Not Authenticated")&&location==this.login){
      alert("Invalid Credentials");
      return false;
    }
    //register student
    if(message.data.message=="Student created"&&message.status==200&&location==this.register){
      alert("Registered Successfully, Please Login");
      return true;
    }else if(message.data.message.includes("Email already exists")){
      alert("Email already exists");
      return false;
    }

    if(message.data.message=="Speaker created"&&message.status==200&&location==this.register){
      alert("Registered Successfully, Please Login");
      return true;
    }else if(message.data.message.includes("Email already exists")){
      alert("Email already exists");
      return false;
    }


    return true;

  }
}
