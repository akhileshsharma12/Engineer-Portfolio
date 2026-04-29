import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Stat {
  value: string;
  label: string;
}

interface Trust {
  label: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  faCircleCheck = faCircleCheck;
  faArrowRight = faArrowRight;

  stats: Stat[] = [
    { value: '00+', label: 'PROJECTS' },
    { value: '00+', label: 'YEARS EXP' },
    { value: '00%', label: 'SATISFACTION' },
  ];

  trusts: Trust[] = [
    { label: 'FREE CONSULTATION' },
    { label: '24HR RESPONSE' },
    { label: 'NO COMMITMENT' },
  ];
}
