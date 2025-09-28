import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from './components/about/about';
import { Skills } from "./components/skills/skills";
import { ProjectsComponent } from './components/projects/projects';
import { CertificationsComponent } from './components/certifications/certifications';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, Skills, ProjectsComponent, CertificationsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
}
