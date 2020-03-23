import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import {LoginComponent} from './login.component';
import {FresherComponent} from './fresher.component';
import {ProfessionalComponent} from './professional.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'account',component:AccountComponent
  },
  {
    path:'fresher',component:FresherComponent
  },
  {
    path:'professional',component:ProfessionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
