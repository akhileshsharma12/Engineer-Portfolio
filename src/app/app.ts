import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Download } from './components/download/download';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';
import { Journey } from './components/journey/journey';
import { ProfessionalAccreditation } from './components/professional-accreditation/professional-accreditation';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, About, Download, Footer, Contact, Journey, ProfessionalAccreditation, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-portfolio');
}
