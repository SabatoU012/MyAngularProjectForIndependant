import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev-web-apps',
  imports: [
  ],
  templateUrl: './dev-web-apps.component.html',
  styleUrl: './dev-web-apps.component.css'
})
export class DevWebAppsComponent {

  constructor(
    private router : Router
  ) {

  }


  getRDV() {
    this.router.navigateByUrl('https://calendly.com/willuc-kaizentech')
  }
}
