import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Platform, ToastController} from '@ionic/angular';
import {ITEMS_DATA, ItemsModel} from '../../@data/data';
import {PurchaseService} from '../../providers/purchase.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  title = 'All';
  items: ItemsModel[] = [];

  constructor(private route: ActivatedRoute,
              public platform: Platform,
              private router: Router,
              public toastController: ToastController,
              public purchase: PurchaseService) {
  }

  ngOnInit() {
    // get category id from query parameters
    this.route.queryParamMap.subscribe((data) => {
      const title = data.get('title');
      if (title) {
        this.title = title;
      }
    });
    // pass data
    setTimeout(() => {
      this.items = ITEMS_DATA;
    }, 3000);
  }
  /**
   * @method add To cart
   * @description add to cart and show toast
   */
  addToCart(item: ItemsModel) {
    this.purchase.addToCart(item);
    // show toast
    this.showToast(item.name + ' added to cart');
  }
  /**
   * @method showToast
   */
  async showToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      color: 'dark',
      position: this.platform.is('ios') ? 'top' : 'bottom',
      buttons: [
        {
          side: 'end',
          text: 'View',
          handler: () => {
            this.router.navigate(['/main/tabs/shop/cart']);
          }
        }]
    });
    await toast.present();
  }
}
