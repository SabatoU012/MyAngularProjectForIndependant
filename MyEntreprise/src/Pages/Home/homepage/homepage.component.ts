import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

interface Section {
  name: string;
  url: string;
}

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

  wheel : boolean = false
  random : number = 0

   @ViewChild('wheel', { static: true }) wheelCanvas!: ElementRef<HTMLCanvasElement>;

  sections: Section[] = [
    { name: 'Mes Passions', url: '/passions' },
    { name: 'About Me', url: '/about' },
    { name: 'Mes Compétences', url: '/skills' },
    { name: 'Contact', url: '/contact' },
  ];

  private ctx!: CanvasRenderingContext2D;
  private startAngle = 0;
  private spinning = false;

  constructor(private router: Router) {}

  ngOnInit() {
    //* Randomiser la disposition des sections pour avoir plus de 
    this.random = Math.random()*10
    // 🔹 Remet la liste complète des sections
    if ( (this.random > 0) && (this.random <= 2) )
    {
      this.sections = [
        { name: 'Mes Passions', url: '/passions' },
        { name: 'About Me', url: '/about' },
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if ( (this.random > 2) && (this.random <= 4) )
    {
      this.sections = [
        { name: 'About Me', url: '/about' },
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        { name: 'Mes Passions', url: '/passions' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if ( (this.random > 4  ) && (this.random <= 6) )
    {
      this.sections = [
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        { name: 'Mes Passions', url: '/passions' },
        { name: 'About Me', url: '/about' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if ( (this.random > 6  ) && (this.random <= 8) )
    {
      this.sections = [
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        { name: 'Mes Passions', url: '/passions' },
        { name: 'About Me', url: '/about' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if (this.random > 8 ) {
      this.random = Math.random()*10
    }
    // * 
    this.ctx = this.wheelCanvas.nativeElement.getContext('2d')!;

    // Récupération des sections sauvegardées
    const savedSections = localStorage.getItem('wheelSections');
    if (savedSections) {
      this.sections = JSON.parse(savedSections);
    }
    this.drawWheel();
  }

  private colors = [
    '#2196f3', '#ff9800', '#e91e63', '#368F42',
  '#9d64ff', '#ff6f61', '#4caf50', '#ffeb3b',
  ];

  private drawWheel() {
  const arc = Math.PI * 2 / this.sections.length;
  this.ctx.clearRect(0, 0, 300, 300);

  for (let i = 0; i < this.sections.length; i++) {
    const angle = this.startAngle + i * arc;
    const color = this.colors[i % this.colors.length];

    this.ctx.beginPath();
    this.ctx.strokeStyle = '#fff';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = color;
    this.ctx.moveTo(150, 150);
    this.ctx.arc(150, 150, 150, angle, angle + arc);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    // Texte avec ombre
    this.ctx.save();
    this.ctx.fillStyle = '#fff';
    this.ctx.shadowColor = 'rgba(0,0,0,0.5)';
    this.ctx.shadowBlur = 4;
    this.ctx.translate(150, 150);
    this.ctx.rotate(angle + arc / 2);
    this.ctx.textAlign = 'right';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillText(this.sections[i].name, 130, 5);
    this.ctx.restore();
  }
}

spinWheel() {
  if (this.spinning) return;
  if (this.sections.length === 0) {
    alert('🎉 Vous avez exploré toutes les sections !');
    return;
  }

  this.spinning = true;

  const arc = (2 * Math.PI) / this.sections.length;
  let speed = 0.45;
  let currentAngle = this.startAngle;

  const animation = () => {
    speed *= 0.985;
    currentAngle += speed;
    this.startAngle = currentAngle;
    this.drawWheel();

    if (speed > 0.003) {
      requestAnimationFrame(animation);
    } else {
      // 🔹 Normalisation de l’angle
      let normalizedAngle = (this.startAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

      // 🔹 Offset pour pointer au centre de la section sous le pointeur
      const offset = arc / 2;
      normalizedAngle = (normalizedAngle + offset) % (2 * Math.PI);

      // 🔹 Calcul de l’index correct
      const winningIndex = Math.floor(this.sections.length - (normalizedAngle / arc)) % this.sections.length;
      const chosen = this.sections[winningIndex];

      setTimeout(() => {
        this.router.navigateByUrl(chosen.url);
        this.sections.splice(winningIndex, 1);

        // Sauvegarder la liste mise à jour dans le localStorage
        localStorage.setItem('wheelSections', JSON.stringify(this.sections));

        this.spinning = false;
        this.spinning = false;
      }, 800);
    }
  };
  animation();
}

  resetWheel() {
    //* Randomiser la disposition des sections pour avoir plus de 
    this.random = Math.random()*10
    // 🔹 Remet la liste complète des sections
    if ( (this.random > 0) && (this.random <= 2) )
    {
      this.sections = [
        { name: 'Mes Passions', url: '/passions' },
        { name: 'About Me', url: '/about' },
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if ( (this.random > 2) && (this.random <= 4) )
    {
      this.sections = [
        { name: 'About Me', url: '/about' },
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        { name: 'Mes Passions', url: '/passions' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if ( (this.random > 4  ) && (this.random <= 6) )
    {
      this.sections = [
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        { name: 'Mes Passions', url: '/passions' },
        { name: 'About Me', url: '/about' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if ( (this.random > 6  ) && (this.random <= 8) )
    {
      this.sections = [
        { name: 'Mes Compétences', url: '/skills' },
        { name: 'Contact', url: '/contact' },
        { name: 'Mes Passions', url: '/passions' },
        { name: 'About Me', url: '/about' },
        // 👉 ajoute ici toutes les sections que tu veux
      ];
    }
    else if (this.random > 8 ) {
      this.random = Math.random()*10
    }
    // 🔹 Supprime du localStorage
    localStorage.removeItem('wheelSections');

    // 🔹 Redessine la roue
    this.drawWheel();
  }

  showWheel() {
    this.wheel = !this.wheel
  }
}
