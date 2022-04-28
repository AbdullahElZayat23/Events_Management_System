import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { ErrorHandlerService } from '../../../../_services/error-handler.service';

@Component({
  selector: 'app-remove-speakers',
  templateUrl: './remove-speakers.component.html',
  styleUrls: ['./remove-speakers.component.css']
})
export class RemoveSpeakersComponent implements OnInit {

  constructor(public http:SpeakerService,public active:ActivatedRoute
    ,public route:Router
    ,public error:ErrorHandlerService) { }

  ngOnInit(): void {
  }

  ConfirmDelete() {
    let id=0;
     this.active.url.subscribe(data=>{
        id = +data[1].path;
     });
    this.http.deleteSpeaker(id).subscribe(
      data => {        
        this.route.navigateByUrl('/home/admin/getAllSpeakers');
      },err=>{
        this.error.ALertError('Remove Speaker',err.message);
      }
    );
  }
  CancelDelete() {
    this.route.navigateByUrl('/home/admin/getAllSpeakers');    
  }

}
