import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public requestMaker:HttpService) { 
    
  }
  getStudentList(){
    return this.requestMaker.sendGetRequest('students');
  }
  getStudentById(id:string){
    return this.requestMaker.sendGetRequestWithParams('students/',id);
  }
  addStudent(data:Object){
    return this.requestMaker.sendPostRequestWithBody('students',data);
  }
  updateStudentPassword(id:string,data:Object){
    return this.requestMaker.sendPutRequestWithParamsAndBody('students/password',data,id);
  }
  updateStudentEdmail(id:string,data:Object){
    return this.requestMaker.sendPutRequestWithParamsAndBody('students/email/',data,id);
  }
  getStudentsEvents(id:string){
    return this.requestMaker.sendGetRequestWithParams('students/events/',id);
  }
  deletStudent(id:string){
    return this.requestMaker.sendDeleteRequestWithParams('students/',id);
  }
}
