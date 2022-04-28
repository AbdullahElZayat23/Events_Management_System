import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { Observable, Subscription } from 'rxjs';
import { ErrorHandlerService } from 'src/app/_services/error-handler.service';
import { SpeakerMock } from 'src/app/_models/speaker-mock';
@Component({
  selector: 'app-get-speakers',
  templateUrl: './get-speakers.component.html',
  styleUrls: ['./get-speakers.component.css']
})
export class GetSpeakersComponent implements OnInit {
  constructor(public students:SpeakerService,public error:ErrorHandlerService) { }
  speakers:SpeakerMock[]=[];
  ngOnInit(): void {
    this.students.getAllSpeakers().subscribe(data=>{
      this.speakers=data;
    },err=>{
      this.error.ALertError('Get Speakers',err.message);
    });

  }


  



}
