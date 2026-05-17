import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faPalette, faBolt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface BarSkill {
  name: string;
  percent: number;
}

interface CircleSkill {
  name: string;
  percent: number;
}

interface ToolSkill {
  name: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  faCode = faCode;
  faPalette = faPalette;
  faBolt = faBolt;
  faArrowRight = faArrowRight;

  frontendSkills: BarSkill[] = [
    { name: 'JAVASCRIPT / TYPESCRIPT', percent: 80 },
    { name: 'REACT.JS', percent: 85 },
    { name: 'NEXT.JS', percent: 75 },
    { name: 'ANGULAR', percent: 60 },
  ];

  stylingSkills: BarSkill[] = [
    { name: 'HTML5 / CSS3', percent: 90 },
    { name: 'TAILWIND CSS', percent: 85 },
    { name: 'BOOTSTRAP', percent: 75 },
  ];

  circleSkills: CircleSkill[] = [
    { name: 'MySQL', percent: 80 },
    { name: 'PostgreSQL', percent: 75 },
    { name: 'Express.js', percent: 80 },
  ];

  tools: ToolSkill[] = [
    { name: 'Git / GitHub' },
    { name: 'REST APIs' },
    { name: 'Postman' },
    { name: 'VS Code & WebStorm' },
  ];

  getCircleDash(percent: number): string {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const filled = (percent / 100) * circumference;
    return `${filled} ${circumference - filled}`;
  }

  ngAfterViewInit(): void {
    // Animate progress bars on load
    setTimeout(() => {
      const bars = document.querySelectorAll('.skill-bar-fill');
      bars.forEach((bar) => {
        const el = bar as HTMLElement;
        el.style.width = el.dataset['width'] + '%';
      });
    }, 100);
  }
}
