import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LogOutService } from '../_services/log-out.service';
import { CurrentUser } from '../_models/current-user';
import { Router, Event, NavigationStart, NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit { 
      showLogoutBtn:string = "none";
      constructor(public logout:LogOutService,public router:Router) {        
        this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationStart) {
              if(CurrentUser.getIsLogged()){
                this.showLogoutBtn = "block";
              }
          }
          if (event instanceof NavigationEnd) {                                   
              if(event.url.includes("/login")){
                this.showLogoutBtn = "none";
              }
              else{
                this.showLogoutBtn = "block";
              }            
        }    
      });
   }  
  ngOnInit(): void {
  }
  logoutUser(){
  this.logout.logout();
  }

}
