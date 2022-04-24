import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Axios  from 'axios';
import axios from 'axios';
import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = environment.APIurl;
  token:string=localStorage.getItem('currentUserToken')!;

   header = new HttpHeaders({
    'Authorization': 'apikey:' + this.token??'',
  });
  constructor(private httpClient: HttpClient,public error:ErrorHandlerService) {  
  }


  //request without params or body
  sendGetRequest(url:string) {
    return Axios.get(this.apiUrl+url,{responseType:'json'}).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }

  //request with body only
  sendPostRequestWithBody(url:string,data: Object){
    // return this.httpClient.post(this.apiUrl+ url , {body:data,responseType:'json'});
   return Axios.post(this.apiUrl+ url , data,{responseType:'json'}).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }
  sendPutRequestWithBody(url:string,data: Object) {
    return Axios.put(this.apiUrl+url,data, {responseType:'json'}).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }

  //Request with params
  sendGetRequestWithParams(url:string,params: string) {
    return Axios.get(this.apiUrl + url + params,{responseType:'json'}).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }
  sendPostRequestWithParams(url:string,params: string) {
    return Axios.get(this.apiUrl + url + params,{responseType:'json'}).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }
  sendDeleteRequestWithParams(url:string,params: string) {
    return Axios.delete(this.apiUrl+url + params,{responseType:'json'} ).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }
  sendPutRequestWithParams(url:string,params: string){
    return Axios.put(this.apiUrl+url + params,{responseType:'json'} ).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }

  //Request with params and body
  sendPostRequestWithParamsAndBody(url:string,data: Object,params: string) {
    return Axios.post(this.apiUrl+ url + params, {body:data,responseType:'json'}).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }
  sendPutRequestWithParamsAndBody(url:string,data: Object,params: string) {
    return Axios.put(this.apiUrl+url + params, {body:data,responseType:'json'}).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }
  sendDeleteRequestWithParamsAndBody(url:string,params: string) {
    return Axios.delete(this.apiUrl+url + params,{responseType:'json'} ).catch(err=>{
      this.error.ALertError('httpservices',err);
    });
  }

}
