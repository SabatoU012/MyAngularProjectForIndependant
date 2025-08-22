import { NgIf } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-myskills',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.css'
})
export class MyskillsComponent {
  skillsInWeb : boolean = false //* ==> Pour mes compétences en Web
  
  skillsInProg : boolean = false //* ==> Pour mes compétences en code

  skillsInElect : boolean = false //* ==> Pour mes compétences en électronique

  skillsIn3D : boolean = false //* ==> Pour mes compétences en 3d





  showDetailsWeb() {
    this.skillsInWeb = !this.skillsInWeb
    this.skillsInProg = false
    this.skillsInElect = false
    this.skillsIn3D = false
  }

  showDetailsProg() {
    this.skillsInWeb = false
    this.skillsInProg = !this.skillsInProg
    this.skillsInElect = false
    this.skillsIn3D = false
  }

  showDetailsElect() {
    this.skillsInWeb = false
    this.skillsInProg = false
    this.skillsInElect = !this.skillsInElect
    this.skillsIn3D = false
  }

  showDetails3D() {
    this.skillsInWeb = false
    this.skillsInProg = false
    this.skillsInElect = false
    this.skillsIn3D = !this.skillsIn3D
  }
}
