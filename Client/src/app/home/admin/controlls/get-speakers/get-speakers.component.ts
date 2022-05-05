import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { Observable, Subscription } from 'rxjs';
import { ErrorHandlerService } from 'src/app/_services/error-handler.service';
import { SpeakerMock } from 'src/app/_models/speaker-mock';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-speakers',
  templateUrl: './get-speakers.component.html',
  styleUrls: ['./get-speakers.component.css']
})
export class GetSpeakersComponent implements OnInit{
  constructor(public speakersServices:SpeakerService,public error:ErrorHandlerService,public route:Router) { }
  speakers:SpeakerMock[]=[];
  
  ngOnInit(): void {
    this.populateList();
  }

  populateList(){
    this.speakersServices.getAllSpeakers().subscribe(data=>{
      this.speakers=data;
      console.log(this.speakers);
    },err=>{
      this.error.ALertError('Get Speakers',err.message);
    });
  }
}
