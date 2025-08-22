import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  email : string = 'willuc.kaizentech@gmail.com'
  phone : string = '+32 495/ 60 76 29'
}
