
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
        

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [LoginService,AlertAndRedirectService,ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
