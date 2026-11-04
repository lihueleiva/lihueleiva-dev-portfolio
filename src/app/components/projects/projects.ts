import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  public readonly i18n = inject(I18nService);
  public selectedImage: string | null = null;

  openLightbox(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }
}
