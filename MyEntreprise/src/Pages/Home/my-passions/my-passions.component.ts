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

  medIsVisible : boolean = false //* ==> Pour la passion "Villes Médievales"

  scienceIsVisible : boolean = false //* ==> Pour la passion "Science"

  antiqIsVisible : boolean = false //* ==> Pour la passion "Antiquités"

  musicIsVisible : boolean = false //* ==> Pour la passion "Musique"

  drawIsVisible : boolean = false //* ==> Pour la passion "Dessin"

  photoIsVisible : boolean = false //* ==> Pour la passion "Photographie"



  showDetailsProg() {
    this.progIsVisible = !this.progIsVisible 
  }

  showDetailsElec() {
    this.elecIsVisible = !this.elecIsVisible 
  }

  showDetails3D() {
    this.tripleDIsVisible = !this.tripleDIsVisible 
  }

  showDetailsManga() {
    this.mangaIsVisible = !this.mangaIsVisible 
  }

  showDetailsMedieval() {
    this.medIsVisible = !this.medIsVisible 
  }

  showDetailsScience() {
    this.scienceIsVisible = !this.scienceIsVisible 
  }

  showDetailsAntiq() {
    this.antiqIsVisible = !this.antiqIsVisible 
  }

  showDetailsMusic() {
    this.musicIsVisible = !this.musicIsVisible 
  }

  showDetailsDraw() {
    this.drawIsVisible = !this.drawIsVisible 
  }

  showDetailsPhpto() {
    this.photoIsVisible = !this.photoIsVisible 
  }
}
