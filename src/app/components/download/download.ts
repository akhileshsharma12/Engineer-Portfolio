import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload, faTrophy, faBolt } from '@fortawesome/free-solid-svg-icons';

interface BadgeItem {
  icon: any;
  iconColor: string;
  label: string;
}

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './download.html',
  styleUrl: './download.css',
})
export class Download {
  faDownload = faDownload;

  badges: BadgeItem[] = [
    { icon: faTrophy, iconColor: 'text-yellow-400', label: 'Top-tier Development' },
    { icon: faBolt, iconColor: 'text-orange-400', label: 'Fast Execution' },
  ];
}
