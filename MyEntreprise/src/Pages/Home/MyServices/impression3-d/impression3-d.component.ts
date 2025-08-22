import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MyFilamentForPrinting } from '../../../../Models/MyFilament.Model';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impression3-d',
  imports: [
    NgbDropdownModule,
  ],
  templateUrl: './impression3-d.component.html',
  styleUrl: './impression3-d.component.css'
})
export class Impression3DComponent {

  whiteQuantity : number = 500
  greyQuantity : number = 1000
  blueQuantity : number = 1000
  purpleQuantity : number = 1000

  constructor(
    private router : Router
  ) {
  }
  
  MyElementsForPrinting : MyFilamentForPrinting[] = [
    {
      name : 'PLA',
      descriptionOfThisFilament : 'Le PLA est...',
      weight : 1,
      color : 'bleu'
    },
  ]



  getRDV() {
    this.router.navigateByUrl('/contact')
  }
}
