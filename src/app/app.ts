import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
}
