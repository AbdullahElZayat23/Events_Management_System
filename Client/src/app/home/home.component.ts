import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertAndRedirectService } from '../_services/alert-and-redirect.service';
import { ErrorHandlerService } from '../_services/error-handler.service';
import { CurrentUser } from '../_models/current-user';
import { LogOutService } from '../_services/log-out.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:Router,public alert:ErrorHandlerService,public logout:LogOutService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('EventSysteMToken');
    let role = localStorage.getItem('EventSysteMRole');
    let id = localStorage.getItem('EventSysteMUser_ID');
    
    if(token == null || role == null || token ==undefined || role == undefined ||id == null || id == undefined/*||CurrentUser.getIsLogged()==false*/){
      this.alert.ALertError('Home','Something happened , You are not logged in, Please login to continue');
      this.logout.logout();          
      this.route.navigateByUrl('/login');
    }else{
      if(role == 'Admin'&&CurrentUser.getType()=='Admin'&&CurrentUser.getIsLogged()==true){
        this.route.navigateByUrl('home/admin/'+id);
      }else if(role == 'Student'&&CurrentUser.getType()=='Student'&&CurrentUser.getIsLogged()==true){
        this.route.navigateByUrl('home/student/'+id);
      }else if(role == 'Speaker'&&CurrentUser.getType()=='Speaker'&&CurrentUser.getIsLogged()==true){
        this.route.navigateByUrl('home/speaker/'+id);
      }
    }
  }

}
