import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
            import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'shop',
        loadChildren: () =>
            import('../shop/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
            import('../orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'settings',
        loadChildren: () =>
            import('../settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
