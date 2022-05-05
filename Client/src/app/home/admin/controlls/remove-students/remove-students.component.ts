import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../../../_services/error-handler.service';
import { studentsService } from '../../../../_services/student.service';

@Component({
  selector: 'app-remove-students',
  templateUrl: './remove-students.component.html',
  styleUrls: ['./remove-students.component.css']
})
export class RemoveStudentsComponent implements OnInit {

  constructor(public http:studentsService,public active:ActivatedRoute
    ,public route:Router
    ,public error:ErrorHandlerService) { }

  ngOnInit(): void {
  }

  ConfirmDelete() {
    let id=0;
     this.active.url.subscribe(data=>{
        id = +data[1].path;
     });
    this.http.deleteStudent(id).subscribe(
      data => {        
        this.route.navigateByUrl('/home/admin/getAllStudents');
      },err=>{
        this.error.ALertError('Remove student',err.message);
      }
    );
  }
  CancelDelete() {
    this.route.navigateByUrl('/home/admin/getAllStudents');    
  }


}
