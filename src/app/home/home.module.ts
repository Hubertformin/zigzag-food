import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    CommonModule,
      SharedModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
      ])
  ]
})
export class HomeModule { }
