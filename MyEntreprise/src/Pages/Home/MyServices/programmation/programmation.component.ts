import { Component, NgModule } from '@angular/core';
import { MyServicesDescribed } from '../../../../Models/MyModels.Model';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programmation',
  imports: [
    
  ],
  templateUrl: './programmation.component.html',
  styleUrl: './programmation.component.css'
})
export class ProgrammationComponent {

    constructor(
      private router : Router
    ) {}

    getRDV() {
      this.router.navigateByUrl('/contact')
    }
}
