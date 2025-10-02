import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Kala E-commerce',
      description: 'Desarrollo de una plataforma de e-commerce completa para un cliente, enfocada en una experiencia de usuario fluida. Incluye gestión de estado de productos, carrito de compras con RxJS y consumo de APIs REST para inventario y usuarios.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
      imageUrl: 'assets/images/project-kala.png',
      githubUrl: 'https://github.com/tu-usuario/kala-ecommerce',
      liveUrl: 'https://kala-ecommerce.web.app/'
    },

  ];
}
