import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MyFilamentForPrinting } from '../../../../Models/MyFilament.Model';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-impression3-d',
  imports: [
    NgFor,
    NgbDropdownModule,
  ],
  templateUrl: './impression3-d.component.html',
  styleUrl: './impression3-d.component.css'
})
export class Impression3DComponent {

  MyElementsForPrinting : MyFilamentForPrinting[] = [
    {
      name : 'PLA',
      descriptionOfThisFilament : 'Le PLA est...',
      weight : 1,
      color : 'bleu'
    },
  ]
}
