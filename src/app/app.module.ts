import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountComponent} from './account.component';
import {LoginComponent} from './login.component';
import {FresherComponent} from './fresher.component';
import {ProfessionalComponent} from './professional.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,AccountComponent,LoginComponent,FresherComponent,ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
