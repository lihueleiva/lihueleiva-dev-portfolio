import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  public readonly i18n = inject(I18nService);

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
