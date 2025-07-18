import { Component } from '@angular/core';
import { RouterLink, } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  imports: [
    NgbDropdownModule,
    RouterLink,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
