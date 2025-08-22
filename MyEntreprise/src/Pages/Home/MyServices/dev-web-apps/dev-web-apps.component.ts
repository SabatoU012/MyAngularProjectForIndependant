import { NgIf } from '@angular/common';
import { Component, NgModule,  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-web-apps',
  imports: [],
  templateUrl: './dev-web-apps.component.html',
  styleUrl: './dev-web-apps.component.css'
})
export class DevWebAppsComponent {

  showNumber : boolean = false
  showEmail : boolean = false

  email : string = 'coucou@mail.be'

  constructor(
    private router : Router
  ) {

  }


  getRDV() {
    this.router.navigateByUrl('/contact')
  }

  showPhoneNumber() {
    this.showNumber = !this.showNumber
  }

  showEmailAdress() {
    this.showEmail = !this.showEmail
  }
}
