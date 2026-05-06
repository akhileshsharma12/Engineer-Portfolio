import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  institution: string;
  year: string;
  degree: string;
  score: string;
}

interface Experience {
  company: string;
  period: string;
  role: string;
  tags: string[];
  points: string[];
}

@Component({
  selector: 'app-journey',
  imports: [CommonModule],
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class Journey {
    education: Education[] = [
    {
      institution: 'GH Raisoni University, Nagpur',
      year: '2023 - 2026',
      degree: 'Bachelor of Computer Applications (BCA)',
      score: 'Current Student — Final Year'
    },
    {
      institution: 'L.R.T. College of Commerce, Akola',
      year: '2021',
      degree: 'Intermediate (12th)',
      score: 'Percentage: 82%'
    },
    {
      institution: 'Jawahar High School, Nagpur',
      year: '2019',
      degree: 'High School (10th)',
      score: 'Percentage: 70%'
    },
  ];

  experience: Experience[] = [
    {
      company: 'Propil Technologies and Advisory Pvt. Ltd.',
      period: 'September 2025 – February 2026 | Frontend Developer Intern',
      role: 'Full Stack Developer Intern',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      points: [
        'Built and maintained full stack web applications using React and Express.',
        'Designed and implemented RESTful APIs integrated with MySQL database.',
        'Worked on responsive UI components using Tailwind CSS and Angular.',
        'Collaborated with team on version control using Git and GitHub.',
      ]
    }
  ];
}
