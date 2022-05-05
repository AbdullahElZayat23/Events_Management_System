import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventMock } from '../../../../_models/event-mock';
import { SpeakerMock } from '../../../../_models/speaker-mock';
import { StudentMock } from '../../../../_models/student-mock';
import { SubSpeakerMock } from '../../../../_models/sub-speaker-mock';
import { ErrorHandlerService } from '../../../../_services/error-handler.service';
import { EventService } from '../../../../_services/event.service';
import { SpeakerService } from '../../../../_services/speaker.service';
import { studentsService } from '../../../../_services/student.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  speakers:SpeakerMock[]=[];
  event:EventMock=new EventMock(0,'','',0,[],[],'');
  subSpeakers:SubSpeakerMock[]=[];
  eventStudents:StudentMock[]=[];
  selectedStudentIDs:number[]=[];
  selectedSubspeakersIDs:number[]=[];
  constructor(public speakersServices:SpeakerService,
    public error:ErrorHandlerService,
    public eventService:EventService,
    public route:Router,
    public studentService:studentsService) {     
     }

  ngOnInit(): void {
    this.getSpeakers();
    this.getStudents();
  }

  getSpeakers(){
    this.speakersServices.getAllSpeakers().subscribe(data=>{
      this.speakers=data;      
      for(let i =0;i<this.speakers.length;i++){
        this.subSpeakers[i] = new SubSpeakerMock(this.speakers[i].Email,this.speakers[i]._id) ;              
      }       
    },err=>{
      this.error.ALertError('Get Speakers',err.message);
    });
  }

  getStudents(){
    this.studentService.getAllStudents().subscribe(
      data=>{
        this.eventStudents=data;
      },
      error=>{
        this.error.ALertError('Get students',error);
      }
    );
  }

  saveEvent(title:string,Mainspeaker:string,date:string ){
    
    if(title!=""&&Mainspeaker!=""&&date!=""&&
     this.selectedStudentIDs.length>0&&
     this.selectedSubspeakersIDs.length>0){
      this.event.Title=title;
      this.event.MainSpeakerID=Number(Mainspeaker.split(':')[1].split(',')[0].trim());
      this.event.Eventdate=date;
      this.event.Status='Active';
      Array.prototype.push.apply(this.event.SubSpeakerSID, this.selectedSubspeakersIDs);   
      Array.prototype.push.apply(this.event.StudentSID,this.selectedStudentIDs);
      // console.log(this.event);      
      this.eventService.createEvent(this.event).subscribe(
        data=>{
          alert("Event created ✔️");
          this.route.navigateByUrl("/home/admin/getAllEvents");
        },
        error=>{
          this.error.ALertError("Create event",error);
        }
      );     
    }else{
      alert("All fields required !!");
    }

  }

}
