import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import {HttpService} from './http.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public requestMaker:HttpService,public error:ErrorHandlerService ) { 
  }
  async RegisterStudent(usernameOrEmail:string,password:string):Promise<any>{
    return await this.requestMaker.sendPostRequestWithBody(`student/register`,
    {'Email':usernameOrEmail,'password':password}).catch(err=>{
      this.error.ALertError('Student register',err);
    });  
  }
  async RegisterSpeaker(Email:string,UserName:string,password:string,Street:string,City:string,Building:string ):Promise<any>{
      return await this.requestMaker.sendPostRequestWithBody(`speaker/register`,
      {'Email':Email,'UserName':UserName,'password':password,
      "address": {
        "Street": Street,
        "City": City,
        "Building": Building}}).catch(err=>{
          this.error.ALertError('Speaker register',err);
        });    
  }
}
