import { Component } from '@angular/core';
import { MyServicesDescribed } from '../../../../Models/MyModels.Model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reparations',
  imports: [
    NgFor
  ],
  templateUrl: './reparations.component.html',
  styleUrl: './reparations.component.css'
})
export class ReparationsComponent {

  MyOptionsForThisService : MyServicesDescribed[] = [
    {
      name : 'Cafetière',
      description : 'coucou'
    },
    {
      name : 'Machine à Laver',
      description : 'coucou'
    },   
  ]

  constructor(
    private router : Router
  ) {}
  getRDV() {
    this.router.navigateByUrl('https://calendly.com/willuc-kaizentech')
  }
}
