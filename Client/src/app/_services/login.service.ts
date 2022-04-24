import { Injectable } from '@angular/core';
import {HttpService} from './http.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(public requestMaker:HttpService ) { 
  }

  async AuthenicateUser(usernameOrEmail:string,password:string,type:string):Promise<any>{
    if(type=="Admin"){
      return  await this.requestMaker.sendPostRequestWithBody(`admin/login`,
      {'UserName':usernameOrEmail,'Password':password});
    }else if (type=="Student"){
      return await this.requestMaker.sendPostRequestWithBody(`student/login`,
      {'Email':usernameOrEmail,'Password':password});
    }else {
      return await this.requestMaker.sendPostRequestWithBody(`speaker/login`,
      {'Email':usernameOrEmail,'Password':password});
    }
   return {};
  }
   
}


