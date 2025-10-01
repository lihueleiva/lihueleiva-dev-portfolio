import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from './components/about/about';
import { SkillsComponent } from "./components/skills/skills";
import { ProjectsComponent } from './components/projects/projects';
import { CertificationsComponent } from './components/certifications/certifications';
import { Contact } from "./components/contact/contact";
import { FooterComponent } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, SkillsComponent, ProjectsComponent, CertificationsComponent, Contact, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
}
