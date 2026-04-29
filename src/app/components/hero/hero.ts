import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBolt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  faBolt = faBolt;
  faArrow = faArrowUpRightFromSquare;
}
