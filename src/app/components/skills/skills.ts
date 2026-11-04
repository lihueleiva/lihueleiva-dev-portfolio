import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  public readonly i18n = inject(I18nService);
}
