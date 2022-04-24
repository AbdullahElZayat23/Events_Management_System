import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AlertAndRedirectService } from '../_services/alert-and-redirect.service';
import { LoginService } from '../_services/login.service';
import { environment } from '../../environments/environment';
import { CurrentUser } from '../_models/current-user';
import { ErrorHandlerService } from '../_services/error-handler.service';
import {Event, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public error:ErrorHandlerService,public logIn:LoginService,public route:Router,public alert:AlertAndRedirectService) { 
}

  ngOnInit(): void {
   
  }
  async LogIn(usernameOrEmail:string,password:string){
        let type="";
        let Admin = document.querySelector('input[id="gridRadiosAdmin"]:checked');
        if(Admin!=null){
        type = "Admin";
        }else if(Admin==null&&Admin==undefined){
          let Student = document.querySelector('input[id="gridRadiosStudent"]:checked');
          if(Student!=null){
            type = "Student";
          }else if(Student==null&&Student==undefined){
            let Speaker = document.querySelector('input[id="gridRadiosSpeaker"]:checked');
            if(Speaker!=null){
              type = "Speaker";
            }
          }
        }
  let message = await this.logIn.AuthenicateUser(usernameOrEmail,password,type);
        if(this.alert.ValidateMessage(message,environment.login)){
          try {
          localStorage.setItem("EventSysteMToken",message.data.token);
          localStorage.setItem("EventSysteMRole",message.data.role);
          localStorage.setItem("EventSysteMUser_ID",message.data.id);
          //set current user
          CurrentUser.setEmailORuserName(usernameOrEmail);
          CurrentUser.setType(type);
          CurrentUser.SetID(message.data.id);
          CurrentUser.setISlogged(true);

          
          

          this.route.navigateByUrl('home');
          } catch (error) {
            this.error.ALertError('Login error ',error);
            this.route.navigateByUrl('login');
          }            
        }          
  }       
}
  
