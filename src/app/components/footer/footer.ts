import { Component } from '@angular/core';

interface SocialLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  email = 'akhileshsharmaengrr@gmail.com';
  phone = '+91 88309 47118';
  year = new Date().getFullYear();

  socials: SocialLink[] = [
    { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/akhilesh-sharma-dev/' },
    { label: 'GITHUB', url: 'https://github.com/akhileshsharma12' },
    // { label: 'TWITTER', url: 'https://twitter.com/yourprofile' },
  ];
}
