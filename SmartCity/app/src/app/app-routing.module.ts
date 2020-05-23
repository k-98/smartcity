import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
