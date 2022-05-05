
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginService } from './_services/login.service';
import { HttpClientModule} from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';
import { StudentRegisterComponent } from './register/student-register/student-register.component';
import { SpeakerRegisterComponent } from './register/speaker-register/speaker-register.component';
import { RouterModule } from '@angular/router';
import { RegisterParentComponent } from './register/register-parent/register-parent.component';
import { AlertAndRedirectService } from './_services/alert-and-redirect.service';
import { ErrorHandlerService } from './_services/error-handler.service';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { StudentComponent } from './home/student/student.component';
import { SpeakerComponent } from './home/speaker/speaker.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { GetSpeakersComponent } from './home/admin/controlls/get-speakers/get-speakers.component';
import { RemoveSpeakersComponent } from './home/admin/controlls/remove-speakers/remove-speakers.component';
import { EditSpeakersComponent } from './home/admin/controlls/edit-speakers/edit-speakers.component';
import { GetStudentsComponent } from './home/admin/controlls/get-students/get-students.component';
import { RemoveStudentsComponent } from './home/admin/controlls/remove-students/remove-students.component';
import { AuthenticationInterceptorService } from './_services/authentication-interceptor.service';
import { GetEventsComponent } from './home/admin/controlls/get-events/get-events.component';
import { EditEventsComponent } from './home/admin/controlls/edit-events/edit-events.component';
import { RemoveEventsComponent } from './home/admin/controlls/remove-events/remove-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddEventComponent } from './home/admin/controlls/add-event/add-event.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { DeclineeventComponent } from './home/admin/controlls/declineevent/declineevent.component';
import { EditStudentsAndSubspeakersComponent } from './home/admin/controlls/edit-students-and-subspeakers/edit-students-and-subspeakers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    StudentRegisterComponent,
    SpeakerRegisterComponent,
    RegisterParentComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent,
    SpeakerComponent,
    NotFoundComponent,
    NotauthorizedComponent,
    GetSpeakersComponent,
    RemoveSpeakersComponent,
    EditSpeakersComponent,
    GetStudentsComponent,
    RemoveStudentsComponent,
    GetEventsComponent,
    EditEventsComponent,
    RemoveEventsComponent,
    AddEventComponent,
    DeclineeventComponent,
    EditStudentsAndSubspeakersComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MultiSelectModule

  ],
  providers: [LoginService,
    AlertAndRedirectService,
    ErrorHandlerService,
    AuthenticationInterceptorService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
