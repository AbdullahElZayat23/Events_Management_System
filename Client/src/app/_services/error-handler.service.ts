import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  ALertError(location:string,error:any){
    alert(`error: ${location} `+error);
  }
}
