import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../../../_services/error-handler.service';
import { SpeakerService } from '../../../../_services/speaker.service';

@Component({
  selector: 'app-edit-speakers',
  templateUrl: './edit-speakers.component.html',
  styleUrls: ['./edit-speakers.component.css']
})
export class EditSpeakersComponent implements OnInit {
  emailOk=false;
  ok=false;
  pettern:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  constructor(public route:Router,public speaker:SpeakerService,public error:ErrorHandlerService) { }
  id:number=0;
  ngOnInit(): void {
    this.id=Number(this.route.url.split('/')[4]);    
  }

  checkEmail(email:string){
    if(this.pettern.test(email)){
      this.emailOk=true;
      this.ok=true;
    }else{
      this.emailOk=false;
      this.ok=false;
    }
  }

  CheckRequiredValue( email: string, city: string,  street: string,  building: string){
    let message = document.getElementById("Ok_MSG")!;
    if(email==""||city==""||street==""||building==""){
      this.ok=false;
      message.style.display="block";
    }else{
      this.ok=true;
      message.style.display="none";
      if(this.ok&&this.emailOk){
        this.savechanges(email,city,street,building);
      }      
    }
  }

  savechanges(email:string,city:string,street:string,building:string){
    this.speaker.updateSpeakerEmail(this.id,email).subscribe(
      data=>{
        this.ok=true;
      },err=>{
        this.ok=false;
        this.error.ALertError("Update speaker email ",err.Message); 
      }
    );

    this.speaker.updateSpeakerAddress(this.id,city,street,building).subscribe(
      data=>{
        this.ok=true;
      },
      err=>{
        this.ok=false;
        this.error.ALertError("Update speaker address ",err.Message);        
      }
    );
    if(this.ok){
      this.route.navigateByUrl('/home/admin');
    }
  }
  cancel(){
    this.route.navigateByUrl('/home/admin/getAllSpeakers');
  }
  

}
