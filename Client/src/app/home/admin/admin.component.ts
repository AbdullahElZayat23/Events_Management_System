import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutService } from 'src/app/_services/log-out.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public route:Router,public logout:LogOutService) { }
  ngOnInit(): void {
    let admin = localStorage.getItem('EventSysteMRole');
    if(admin!="Admin"){
      alert("You are not authorized to view this page");
      this.logout.logout();
      this.route.navigate(['/login']);
    }
  }

  

}
