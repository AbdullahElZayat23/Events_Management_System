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
      localStorage.removeItem('EventSysteMToken');
      localStorage.removeItem('EventSysteMRole');
      localStorage.removeItem('EventSysteMUser_ID');
      localStorage.removeItem("EventSysteMUser_logged?");

      this.route.navigate(['/login']);
    } catch (error) {
      this.error.ALertError('Logout error ',error);
    }
    // remove user from local storage
   
}
}
