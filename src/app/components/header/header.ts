import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  public readonly i18n = inject(I18nService);
}
