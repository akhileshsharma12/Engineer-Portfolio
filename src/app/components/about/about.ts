import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faStar, faGear, faLightbulb, faBolt, faServer } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface AboutPoint {
  icon: IconDefinition;
  color: string;
  text: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  contact: String = '+91 8830947118';
  email: String = 'akhileshsharmaengrr@gmail.com';

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faStar = faStar;
  faGear = faGear;
  faLightbulb = faLightbulb;
  faBolt = faBolt;
  faServer = faServer;

   points: AboutPoint[] = [
    {
      icon: faBolt,
      color: 'text-blue-400',
      text: 'Full Stack Developer skilled in React, Next.js, Angular, Express.js, MySQL and PostgreSQL.'
    },
    {
      icon: faServer,
      color: 'text-blue-400',
      text: 'Passionate about building scalable, high-performance web apps with clean architecture.'
    },
    {
      icon: faStar,
      color: 'text-yellow-400',
      text: 'Experienced in REST API design, database management, and modern state management tools.'
    },
    {
      icon: faGear,
      color: 'text-blue-400',
      text: 'Enthusiastic about clean code, reusable components, and maintainable codebases.'
    },
    {
      icon: faLightbulb,
      color: 'text-yellow-400',
      text: 'Currently learning Angular as a second frontend framework alongside React and Next.js.'
    },
  ];

}
