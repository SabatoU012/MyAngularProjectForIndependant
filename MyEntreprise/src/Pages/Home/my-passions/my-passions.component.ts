import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-passions',
  imports: [
    RouterLink,
    NgbDropdownModule,
    CommonModule
  ],
  templateUrl: './my-passions.component.html',
  styleUrl: './my-passions.component.css'
})
export class MyPassionsComponent {
  progIsVisible : boolean = false //* ==> Pour la passion "Codding"

  elecIsVisible : boolean = false //* ==> Pour la passion "Électronique"

  tripleDIsVisible : boolean = false //* ==> Pour la passion "Conception 3D"

  mangaIsVisible : boolean = false //* ==> Pour la passion "Manga"

  antiqIsVisible : boolean = false //* ==> Pour la passion "Antiquités"

  drawIsVisible : boolean = false //* ==> Pour la passion "Dessin"

  photoIsVisible : boolean = false //* ==> Pour la passion "Photographie"



  showDetailsProg() {
    this.progIsVisible = !this.progIsVisible 
    this.elecIsVisible = false
    this.tripleDIsVisible = false
    this.mangaIsVisible = false
    this.antiqIsVisible = false
    this.drawIsVisible  = false
    this.photoIsVisible = false
  }

  showDetailsElec() {
    this.elecIsVisible = !this.elecIsVisible
    this.progIsVisible = false
    this.tripleDIsVisible = false
    this.mangaIsVisible = false
    this.antiqIsVisible = false
    this.drawIsVisible  = false
    this.photoIsVisible = false
  }

  showDetails3D() {
    this.tripleDIsVisible = !this.tripleDIsVisible
    this.elecIsVisible = false
    this.progIsVisible = false
    this.mangaIsVisible = false
    this.antiqIsVisible = false
    this.drawIsVisible  = false
    this.photoIsVisible = false
  }

  showDetailsManga() {
    this.mangaIsVisible = !this.mangaIsVisible
    this.elecIsVisible = false
    this.tripleDIsVisible = false
    this.progIsVisible = false
    this.antiqIsVisible = false
    this.drawIsVisible  = false
    this.photoIsVisible = false
  }

  showDetailsAntiq() {
    this.antiqIsVisible = !this.antiqIsVisible
    this.elecIsVisible = false
    this.tripleDIsVisible = false
    this.mangaIsVisible = false
    this.progIsVisible = false
    this.drawIsVisible  = false
    this.photoIsVisible = false
  }

  showDetailsDraw() {
    this.drawIsVisible = !this.drawIsVisible 
    this.elecIsVisible = false
    this.tripleDIsVisible = false
    this.mangaIsVisible = false
    this.antiqIsVisible = false
    this.progIsVisible  = false
    this.photoIsVisible = false
  }

  showDetailsPhoto() {
    this.photoIsVisible = !this.photoIsVisible
    this.elecIsVisible = false
    this.tripleDIsVisible = false
    this.mangaIsVisible = false
    this.antiqIsVisible = false
    this.drawIsVisible  = false
    this.progIsVisible = false
  }
}
