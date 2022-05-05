import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentMock } from '../../../../_models/student-mock';
import { AlertAndRedirectService } from '../../../../_services/alert-and-redirect.service';
import { ErrorHandlerService } from '../../../../_services/error-handler.service';
import { studentsService } from '../../../../_services/student.service';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.css']
})
export class GetStudentsComponent implements OnInit {
students:StudentMock[]=[];
emailOk=false;
message:any;
id:number=0;
pettern:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  constructor(public studentsServices:studentsService,
    public error:ErrorHandlerService,
    public studentServices:studentsService,
    public alert:AlertAndRedirectService) {
   }

  ngOnInit(): void {
    this.populateList();
  }

  populateList(){
    this.studentsServices.getAllStudents().subscribe(data=>{
      this.students=data;     
    },err=>{
      this.error.ALertError('Get students',err.message);
    });
  }

  checkEmail(email:string,id:number){
    this.message = document.getElementById(`message${1}`);
    if(email==""){
      this.emailOk=false;    
    }
    if(this.pettern.test(email)){
      this.emailOk=true;
      this.message.style.display="none";
    }else{
      this.emailOk=false;
      this.message.style.display="block";
    }
  }

  edit(email:string,id:number){
    if(id!=undefined && id !=null && email!="" && this.emailOk){
    this.studentServices.updateStudentEmail(id,email).subscribe(
      data=>{
        this.alert.ValidateMessage(data,"student");        
      },
      err=>{  
        this.error.ALertError("Update student email",err)
      }
    );
    }else{
      alert('Email field is required!!');
    }    
  }

}
