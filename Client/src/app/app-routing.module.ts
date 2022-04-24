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
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'register',component:RegisterParentComponent,children:[
    {path:'student',component:StudentRegisterComponent},
    {path:'speaker',component:SpeakerRegisterComponent}
  ]},
  {path:'home',component:HomeComponent,children:[
    {path:'admin/:id',component:AdminComponent},
    {path:'speaker/:id',component:SpeakerComponent},
    {path:'student/:id',component:StudentComponent}
  ]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
