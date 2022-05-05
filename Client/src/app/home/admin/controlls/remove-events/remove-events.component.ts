import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from '../../../../_services/error-handler.service';
import { EventService } from '../../../../_services/event.service';

@Component({
  selector: 'app-remove-events',
  templateUrl: './remove-events.component.html',
  styleUrls: ['./remove-events.component.css']
})
export class RemoveEventsComponent implements OnInit {

  constructor(public active:ActivatedRoute,
    public eventService:EventService,
    public route:Router,
    public error:ErrorHandlerService) { }

  ngOnInit(): void {
  }

  ConfirmDelete() {
    let id=0;
     this.active.url.subscribe(data=>{
        id = +data[1].path;
     });
    this.eventService.deleteEvent(id).subscribe(
      data => {        
        this.route.navigateByUrl('/home/admin/getAllEvents');
      },err=>{
        this.error.ALertError('Remove event',err.message);
      }
    );
  }
  CancelDelete() {
    this.route.navigateByUrl('/home/admin/getAllEvents');    
  }

}
