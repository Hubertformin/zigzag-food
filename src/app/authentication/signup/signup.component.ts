import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    phoneNumber: [''],
    password: [''],
    confirm: ['']
  });

  constructor(private fb: FormBuilder, private storage: Storage, private router: Router) { }

  ngOnInit() {}
  // get name
  get name() {
    return this.form.get('name');
  }
  // get email
  get email() {
    return this.form.get('email');
  }
  // get phone number control
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  // get password control
  get password() {
    return this.form.get('phoneNumber');
  }
  // get confirm password control
  get confirmPassword() {
    return this.form.get('confirm');
  }
  /**
   * @method signUp
   * @description register user to server....
   */
  signUp($event) {
    console.log(this.form.value);
    this.storage.set('user', JSON.stringify(this.form.value));

  }
  /**
   * @method passwordMatch
   * @description check if passwords match
   */
}
