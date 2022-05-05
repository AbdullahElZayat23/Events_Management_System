import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertAndRedirectService } from 'src/app/_services/alert-and-redirect.service';
import { RegisterService } from 'src/app/_services/register.service';
import {Speaker} from '../../../app/_models/speaker';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-speaker-register',
  templateUrl: './speaker-register.component.html',
  styleUrls: ['./speaker-register.component.css'],
})
export class SpeakerRegisterComponent implements OnInit {
  matched:boolean=false;
  ok:boolean=false;
  emailOk:boolean=false;
  pettern:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  speaker:Speaker=new Speaker("","","","","","");
  constructor(public route:Router,public request:RegisterService,public alert:AlertAndRedirectService) { }

  ngOnInit(): void {
  }

  check(pass:string,Cpass:string){
    let message=document.getElementById("message")!;
    if(pass != Cpass){
      this.matched=false;
      this.ok=false;
      message.innerHTML="Password not matched ✘";
      message.style.color = "red";      
    }else if(pass == Cpass){
      this.matched=true;
      this.ok=true;
      message.innerHTML="Password matched ✓";
      message.style.color = "green";          
    }
}

BackToLogin(){
  this.route.navigateByUrl('/login');
}

CheckRequiredValue( email: string,  password: string,  username: string,   city: string,  street: string,  building: string){
  let message = document.getElementById("Ok_MSG")!;
  if(email==""||password==""||username==""||city==""||street==""||building==""){
    this.ok=false;
    message.style.display="block";
  }else{
    this.ok=true;
    message.style.display="none";
    this.Register( email,  password,  username,   city,  street,  building);
  }
}
 async Register( email: string,  password: string,  username: string,   city: string,  street: string,  building: string){
  if(this.ok){
      let message = await this.request.RegisterSpeaker( email , username,password, street, city, building);
    if(this.alert.ValidateMessage(message,environment.register)){
      this.route.navigateByUrl('/login');
    }
  }
   
}

checkEmail(email:string){
  if(this.pettern.test(email)){
    this.emailOk=true;
    this.ok=true;
  }else{
    this.emailOk=false;
    this.ok=false;
  }
}

}
