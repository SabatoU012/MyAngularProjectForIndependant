import { Component, NgModule } from '@angular/core';
import { MyServicesDescribed } from '../../../../Models/MyModels.Model';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Coordonnees } from '../../../../Models/coord.model';

@Component({
  selector: 'app-reparations',
  imports: [],
  templateUrl: './reparations.component.html',
  styleUrl: './reparations.component.css'
})
export class ReparationsComponent {
  
  showNumber : boolean = false
  showEmail : boolean = false

   email : string = 'coucou@gmail.be'
   phone : string = ''

  constructor(
    private router : Router,
  ) {}
  
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
