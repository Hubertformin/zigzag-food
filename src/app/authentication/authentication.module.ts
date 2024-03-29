import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import {LoginComponent} from './login/login.component';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../shared/shared.module';
import {SignupComponent} from './signup/signup.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    IonicModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
