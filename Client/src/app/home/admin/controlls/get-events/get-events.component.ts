import { Component, OnInit } from '@angular/core';
import { EventMock } from '../../../../_models/event-mock';
import { ErrorHandlerService } from '../../../../_services/error-handler.service';
import { EventService } from '../../../../_services/event.service';

@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css']
})
export class GetEventsComponent implements OnInit {
events:EventMock[]=[];
  constructor(public eventService:EventService,
    public error:ErrorHandlerService) { }

  ngOnInit(): void {
    this.populateList();
  }

  populateList(){
    this.eventService.getAllEvents().subscribe(
      data=>{
        this.events=data;
      },error=>{
        this.error.ALertError("get events",error);
      }
    );

  }



}
