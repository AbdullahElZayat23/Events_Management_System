import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpeakerMock } from '../_models/speaker-mock';
@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  token:string = localStorage.getItem('EventSysteMToken')!;
   header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.token}`)
  }
  constructor(public http:HttpClient) { }

  getAllSpeakers(){
    return this.http.get<SpeakerMock[]>(environment.APIurl+'speakers',this.header);
  }

  deleteSpeaker(id:number){
    return this.http.delete(environment.APIurl+'speakers/'+id,this.header);
  }

  updateSpeakerEmail(id:number,email:string){
    return this.http.put(environment.APIurl+'speakers/email/'+id,{Email:email},this.header);
  }

  updateSpeakerAddress(id:number,city:string,street:string,building:string){
    return this.http.put(environment.APIurl+'speakers/address/'+id,{ address: {
      Street: street,
      City: city,
      Building: building
  }},this.header);
  }


}
