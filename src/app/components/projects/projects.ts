import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  public selectedImage: string | null = null;

  public projects = [
    {
      title: 'E-commerce Vertex',
      description: 'Desarrollo de una plataforma de e-commerce completa para un cliente, enfocada en una experiencia de usuario fluida. Incluye gestión de estado de productos, carrito de compras con RxJS y consumo de APIs REST para inventario y usuarios.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
      images: [
        'assets/images/ecommerce-vertex-catalog.png',
        'assets/images/ecommerce-vertex-cart.png'
      ]
    },

  ];

  openLightbox(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }
}
