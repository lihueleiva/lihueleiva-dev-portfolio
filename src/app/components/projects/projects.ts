import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  public readonly i18n: I18nService = inject(I18nService);
  public selectedImage: string | null = null;

  openLightbox(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }
}
