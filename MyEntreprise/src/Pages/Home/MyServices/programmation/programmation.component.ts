import { Component } from '@angular/core';
import { MyServicesDescribed } from '../../../../Models/MyModels.Model';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programmation',
  imports: [
    NgFor
  ],
  templateUrl: './programmation.component.html',
  styleUrl: './programmation.component.css'
})
export class ProgrammationComponent {

  MyOptionsForThisService : MyServicesDescribed[] = [
      {
        name : 'Arduino',
        description : 'coucou'
      },
      {
        name : 'JavaScript',
        description : 'coucou'
      },
      {
        name : 'SQL',
        description : 'coucou'
      }, 
      {
        name : 'Python',
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
