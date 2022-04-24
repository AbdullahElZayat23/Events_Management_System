import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertAndRedirectService } from 'src/app/_services/alert-and-redirect.service';
import {RegisterService} from '../../_services/register.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
matched:boolean=false;
ok:boolean=false;
  constructor(public requestMaker:RegisterService,public route:Router,public alert:AlertAndRedirectService) { }

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

  CheckBeforeRegister(email:string,pass:string){
    let FalertMSG = document.getElementById("Falert")!;
    let PalertMSG = document.getElementById("Palert")!;

    if(email=="" || pass==""){
      this.ok=false;
      FalertMSG.style.display="block";
      FalertMSG.innerHTML="Please fill all the fields !!";
    }else{
      this.ok=true;
      FalertMSG.style.display="none";
      FalertMSG.innerHTML="";
    }
    if(this.matched==false){
      this.ok=false;
      PalertMSG.style.display="block";
      PalertMSG.innerHTML="Password not matched !!";
    }else{
      this.ok=true;
      PalertMSG.style.display="none";
      PalertMSG.innerHTML="";
    }
    if(this.ok){
      this.register(email,pass);
    }
  }
   
  async register(email:string,pass:string){
    let message = await this.requestMaker.RegisterStudent(email,pass);
    if(this.alert.ValidateMessage(message,environment.register)){
      this.BackToLogin();
    }
   
  }

  BackToLogin(){
    this.route.navigateByUrl('/login');
  }
}


