import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CATEGORIES_DATA} from '../../@data/data';
import {Platform} from '@ionic/angular';
import {PurchaseService} from '../../providers/purchase.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(private router: Router, public platform: Platform, public purchase: PurchaseService) {
  }

  categories = CATEGORIES_DATA;

  ngOnInit() {}

  showDetail(title: string) {
    this.router.navigate(['/main/tabs/shop/items'], {queryParams: {title}});
  }

  onSearch($event) {
    console.log($event.target.value);
  }

  /*searchMode(isSearch: boolean) {
    if (isSearch) {
      document.querySelector('#search-body').classList.add('show');
    } else {
      document.querySelector('#search-body').classList.remove('show');
    }
  }*/

  ngOnDestroy(): void {
  }
}
