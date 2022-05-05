import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentMock } from '../_models/student-mock';
import { StudentEventsMock } from '../_models/student-events-mock';
@Injectable({
  providedIn: 'root'
})
export class studentsService {
  token:string = localStorage.getItem('EventSysteMToken')!;
   header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.token}`)
  }
  constructor(public http:HttpClient) { }

  getAllStudents(){
    return this.http.get<StudentMock[]>(environment.APIurl+'students',this.header);
  }
  getStudentByID(id:number){
    return this.http.get<StudentMock>(environment.APIurl+'students/'+id,this.header);
  }

  getStudentEvents(id:number){
    return this.http.get<StudentEventsMock>(environment.APIurl+'students/events/'+id);

  }

  deleteStudent(id:number){
    return this.http.delete(environment.APIurl+'Students/'+id,this.header);
  }

  updateStudentEmail(id:number,email:string){
    return this.http.put(environment.APIurl+'Students/email/'+id,{Email:email},this.header);
  }

  updateStudentPassword(id:number,NewPassword:string){
    return this.http.put(environment.APIurl+'Students/password/'+id,{ password: {NewPassword}},this.header);
  }


}
