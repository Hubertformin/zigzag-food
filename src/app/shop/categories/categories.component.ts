import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemsComponent} from '../items/items.component';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @ViewChild(NavController, {static: false}) nav: NavController;
  constructor(public navCtrl: NavController, private router: Router) { }

  techs = [
    {
      title: 'Food',
      icon: 'angular',
      description: 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      color: '#E63135'
    },
    {
      title: 'Beverages',
      icon: 'css3',
      description: 'The latest version of cascading stylesheets - the styling language of the web!',
      color: '#0CA9EA'
    },
    {
      title: 'Cheese',
      icon: 'html5',
      description: 'The latest version of the web\'s markup language.',
      color: '#F46529'
    },
    {
      title: 'Perishables',
      icon: 'javascript',
      description: 'One of the most popular programming languages on the Web!',
      color: '#FFD439'
    },
    {
      title: 'Sass',
      icon: 'sass',
      description: 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
      color: '#CE6296'
    },
    {
      title: 'NodeJS',
      icon: 'nodejs',
      description: 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
      color: '#78BD43'
    },
    {
      title: 'Python',
      icon: 'python',
      description: 'A clear and powerful object-oriented programming language!',
      color: '#3575AC'
    },
    {
      title: 'Markdown',
      icon: 'markdown',
      description: 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
      color: '#412159'
    },
    {
      title: 'Tux',
      icon: 'tux',
      description: 'The official mascot of the Linux kernel!',
      color: '#000'
    },
  ];

  ngOnInit() {}

  showDetail(title: string) {
    this.router.navigate(['/main/tabs/shop/items'], {queryParams: {title}});
  }
}
