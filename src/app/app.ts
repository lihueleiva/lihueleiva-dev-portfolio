import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from './components/about/about';
import { SkillsComponent } from "./components/skills/skills";
import { ProjectsComponent } from './components/projects/projects';
import { CertificationsComponent } from './components/certifications/certifications';
import { ContactComponent } from "./components/contact/contact";
import { FooterComponent } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Hero, About, SkillsComponent, ProjectsComponent, CertificationsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
}

