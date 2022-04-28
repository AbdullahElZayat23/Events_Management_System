import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentRegisterComponent } from './register/student-register/student-register.component';
import { SpeakerRegisterComponent } from './register/speaker-register/speaker-register.component';
import { RegisterParentComponent } from './register/register-parent/register-parent.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './home/admin/admin.component';
import { SpeakerComponent } from './home/speaker/speaker.component';
import { StudentComponent } from './home/student/student.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { AdminGuard } from './_guards/admin.guard';
import { SpeakerGuard } from './_guards/speaker.guard';
import { StudentGuard } from './_guards/student.guard';
import { GetSpeakersComponent } from './home/admin/controlls/get-speakers/get-speakers.component';
import { GetStudentsComponent } from './home/admin/controlls/get-students/get-students.component';
import { EditSpeakersComponent } from './home/admin/controlls/edit-speakers/edit-speakers.component';
import { EditStudentsComponent } from './home/admin/controlls/edit-students/edit-students.component';
import { RemoveStudentsComponent } from './home/admin/controlls/remove-students/remove-students.component';
import { RemoveSpeakersComponent } from './home/admin/controlls/remove-speakers/remove-speakers.component';
import { LoginGuard } from './_guards/login.guard';
const routes: Routes = [
  {path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
  {path:'register',component:RegisterParentComponent,children:[
    {path:'student',component:StudentRegisterComponent},
    {path:'speaker',component:SpeakerRegisterComponent}
  ]},
  {path:'home',component:HomeComponent,children:[
    {path:'admin',component:AdminComponent,canActivate:[AdminGuard],children:[
      {path:'getAllSpeakers',component:GetSpeakersComponent},
      {path:'getAllStudents',component:GetStudentsComponent},
      {path:'editSpeaker/:id',component:EditSpeakersComponent},
      {path:'editStudent/:id',component:EditStudentsComponent},
      {path:'removestudent/:id',component:RemoveStudentsComponent},
      {path:'removespeaker/:id',component:RemoveSpeakersComponent}
    ]},
    {path:'speaker',component:SpeakerComponent,canActivate:[SpeakerGuard]},
    {path:'student',component:StudentComponent,canActivate:[StudentGuard]},
  ]},
  {path:'notauthorized',component:NotauthorizedComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
