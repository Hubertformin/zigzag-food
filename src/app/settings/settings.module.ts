import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SettingsPage],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }])
  ]
})
export class SettingsModule {}
