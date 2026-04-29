import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
    standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faXTwitter = faXTwitter;
}
