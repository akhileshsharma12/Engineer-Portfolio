import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrophy, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-professional-accreditation',
  imports: [FontAwesomeModule],
  templateUrl: './professional-accreditation.html',
  styleUrl: './professional-accreditation.css',
})
export class ProfessionalAccreditation {
    faTrophy = faTrophy;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  certificates = [
    { image: '/Screenshot.png' },
    { image: '/sss.png' },
    { image: '/Screenshot.png' },
  ];

  currentIndex = 0;

  get currentCertificate() {
    return this.certificates[this.currentIndex];
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.certificates.length) %
      this.certificates.length;
  }

}
