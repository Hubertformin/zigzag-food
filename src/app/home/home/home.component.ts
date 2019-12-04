import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CATEGORIES_DATA} from '../../@data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  categories = CATEGORIES_DATA;

  constructor(private router: Router) { }

  ngOnInit() {}

    navigateCategory(name: string) {
        this.router.navigate(['/main/tabs/shop/items'], {queryParams: {title: name}});
    }
}
