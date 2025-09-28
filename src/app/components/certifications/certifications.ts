import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss'
})
export class CertificationsComponent {
  public certifications = [
    {
      title: 'Angular',
      issuer: 'Coderhouse',
      imageUrl: 'assets/images/certs/angular-coderhouse.png'
    },
    {
      title: 'Angular (Sololearn)',
      issuer: 'Sololearn',
      imageUrl: 'assets/images/certs/angular-sololearn.jpg'
    },
    {
      title: 'Desarrollo Web',
      issuer: 'Coderhouse',
      imageUrl: 'assets/images/certs/desarrollo-web-coderhouse.png'
    },
    {
      title: 'Desarrollo Web (Sololearn)',
      issuer: 'Sololearn',
      imageUrl: 'assets/images/certs/web-development.png'
    },
    {
      title: 'JavaScript Intermediate',
      issuer: 'Sololearn',
      imageUrl: 'assets/images/certs/javascript-sololearn.png'
    },
    {
      title: 'JavaScript',
      issuer: 'EDteam',
      imageUrl: 'assets/images/certs/certificado-curso-javascript.png'
    },
    {
      title: 'Programación Orientada a Objetos',
      issuer: 'EDteam',
      imageUrl: 'assets/images/certs/certificado-curso-poo.png'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'Sololearn',
      imageUrl: 'assets/images/certs/prompt-engineering.png'
    },
    {
      title: 'Vibe Coding',
      issuer: 'Sololearn',
      imageUrl: 'assets/images/certs/vibe-coding.jpg'
    },
    {
      title: 'JavaScript Introduction',
      issuer: 'Sololearn',
      imageUrl: 'assets/images/certs/javascript-sololearn-introduction.png'
    },

  ];
}
