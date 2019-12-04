import { Component, OnInit } from '@angular/core';
import {PurchaseService} from '../../providers/purchase.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  constructor(public purchase: PurchaseService, private loadingController: LoadingController) { }

  ngOnInit() {}

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
    });
    return await loading.present();
  }
  /**
   * @method checkOut
   */
  checkOut() {
    this.presentLoadingWithOptions();
  }
}
