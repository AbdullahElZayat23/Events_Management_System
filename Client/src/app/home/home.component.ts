import { Component, ErrorHandler, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertAndRedirectService } from '../_services/alert-and-redirect.service';
import { ErrorHandlerService } from '../_services/error-handler.service';
import { LogOutService } from '../_services/log-out.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:Router,
    public error:ErrorHandlerService,
    public logout:LogOutService,
    ) { }
 

  ngOnInit(): void {
    let token = localStorage.getItem('EventSysteMToken');
    let role = localStorage.getItem('EventSysteMRole');
    let Islogged = localStorage.getItem('EventSysteMUser_logged?');
    let id = localStorage.getItem('EventSysteMUser_ID');
    if(token == null || role == null || token ==undefined || role == undefined ||id == null || id == undefined){
      this.error.ALertError('Home','Something happened , You are not logged in, Please login to continue');
      this.logout.logout();          
      this.route.navigateByUrl('/login');
    }else{
      if(role == 'Admin'&&Islogged=='true'){
        this.route.navigateByUrl('home/admin');
      }else if(role == 'Student'&&Islogged=='true'){
        this.route.navigateByUrl('home/student');
      }else if(role == 'Speaker'&&Islogged=='true'){
        this.route.navigateByUrl('home/speaker');
      }
    }
  }

}
