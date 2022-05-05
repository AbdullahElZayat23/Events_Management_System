import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { EventMock } from '../_models/event-mock';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  token:string = localStorage.getItem('EventSysteMToken')!;
  header = {
   headers: new HttpHeaders()
     .set('Authorization',  `Bearer ${this.token}`)
 }
  constructor(public http:HttpClient) { }

  getAllEvents(){
    return this.http.get<EventMock[]>(environment.APIurl+'events',this.header);
  }
  getMainSpeakerUsername(id:number){
    return this.http.get(environment.APIurl+'events/MainSpeakerUserName/'+id,this.header);
  }

  createEvent(event:EventMock){    
    return this.http.post(environment.APIurl+'events',{
      "Title": event!.Title,
      "Eventdate": event!.Eventdate,
      "MainSpeakerID": event!.MainSpeakerID,
      "SubSpeakerSID": event!.SubSpeakerSID,
      "StudentSID": event!.StudentSID,
      "Status":event!.Status
  },this.header);
  }

  deleteEvent(id:number){
return this.http.delete(environment.APIurl+'events/'+id,this.header);
  }

  
}
