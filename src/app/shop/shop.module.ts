import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPage } from './shop.page';
import {CategoriesComponent} from './categories/categories.component';
import {SharedModule} from '../shared/shared.module';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';
import {ItemsComponent} from './items/items.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CategoriesComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'items', component: ItemsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent}
    ]),
  ],
  declarations: [ShopPage, CategoriesComponent, ToolbarComponent, ItemsComponent, CartComponent, CheckoutComponent]
})
export class ShopModule {}
