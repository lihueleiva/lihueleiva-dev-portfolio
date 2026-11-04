import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  public readonly i18n = inject(I18nService);
}
