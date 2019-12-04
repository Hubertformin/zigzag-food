import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { LocaleCurrencyPipe } from './pipes/locale-currency.pipe';
import {IonicStorageModule} from '@ionic/storage';



@NgModule({
  declarations: [LocaleCurrencyPipe],
  imports: [
      IonicModule,
    CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],
    exports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        LocaleCurrencyPipe
    ]
})
export class SharedModule { }
