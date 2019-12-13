import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  userForm = this.fb.group({
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    password: '',
    address: ''
  });

  ngOnInit(): void {
    this.storage.get('user')
        .then((data) => {
          console.log(data);
        });
  }

  constructor(public actionSheetController: ActionSheetController, private storage: Storage, private fb: FormBuilder) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
