import { Component, OnInit } from '@angular/core';
import {PurchaseService} from '../../providers/purchase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(public purchase: PurchaseService) { }

  ngOnInit() {}

  onQuantityChange(val: number, id: string) {
    this.purchase.changeQuantity(id, val);
  }
}
