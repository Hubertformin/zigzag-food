import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopPage } from './tab1.page';

describe('Tab1Page', () => {
  let component: ShopPage;
  let fixture: ComponentFixture<ShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
