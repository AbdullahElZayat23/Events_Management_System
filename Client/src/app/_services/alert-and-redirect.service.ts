import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AlertAndRedirectService {
   register ="register";
   login= "login";
  constructor(public route:Router,public error:ErrorHandlerService) { }

  ValidateMessage(message:any,location:string):boolean {
    //FIXME fix validate message
    try{
     /* if(message['message']=="" || message['message']==undefined){
        alert("Can't display the message, message is undefined or null!!")
        return false;
      }
      //login
      if(message['message'].toString().includes("Not Authenticated")&&location==this.login){
        alert("Invalid Credentials");
        return false;
      }
      //register student
      if(message['message']=="Student created"&&message.status==200&&location==this.register){
        alert("Registered Successfully, Please Login");
        return true;
      }
      if(message['message'].toString().includes("Speaker created")&&message.status==200&&location==this.register){
        alert("Registered Successfully, Please Login");
        return true;
      }
      //not autherized here
      //anything else
      */
      alert(message.message);
      return true;

    }catch(error){
      this.error.ALertError("Alert and redirect services",error);
      return false;
    }
    

  }
}
