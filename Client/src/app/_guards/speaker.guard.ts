import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakerGuard implements CanActivate {
  constructor(public route:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = localStorage.getItem('EventSysteMRole');
      if(role == 'Student'){      
        return true;
      }else{
        this.route.navigateByUrl('/notauthorized');
        return false;
      }      
  }
  
}
