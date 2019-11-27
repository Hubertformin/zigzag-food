import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopPage } from './shop.page';
import {CategoriesComponent} from './categories/categories.component';
import {SharedModule} from '../shared/shared.module';
import {AppModule} from '../app.module';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';
import {ItemsComponent} from './items/items.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'categories', pathMatch: 'full'},
      {path: 'categories', component: CategoriesComponent},
      {path: 'items', component: ItemsComponent}
    ])
  ],
  declarations: [ShopPage, CategoriesComponent, ToolbarComponent, ItemsComponent]
})
export class ShopModule {}
