import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(public error:ErrorHandlerService,public route:Router) { }
  logout() {
    try {
        this.ClearLocalStorage();
      this.route.navigate(['/login']);
    } catch (error) {
      this.error.ALertError('Logout error ',error);
    }
    // remove user from local storage
}
  ClearLocalStorage(){
    localStorage.removeItem('EventSysteMToken');
    localStorage.removeItem('EventSysteMRole');
    localStorage.removeItem('EventSysteMUser_ID');
    localStorage.removeItem("EventSysteMUser_logged?");

  }
}
