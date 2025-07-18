import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-passions',
  imports: [
    RouterLink,
    NgbDropdownModule,
  ],
  templateUrl: './my-passions.component.html',
  styleUrl: './my-passions.component.css'
})
export class MyPassionsComponent {

}
