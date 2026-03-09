import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Project {
  title: string;
  img: string;
  category: string;
  size?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {

  projects: Project[] = [
    {
      title: 'Aparna Serene Park',
      img: '/assets/Aparna-Serene-Parl.jpg',
      category: 'Residential',
      size: '3BHK',
    },
    {
      title: 'Chandanagar Avantika',
      img: '/assets/Chandanagr-Avantika Residency.jpg',
      category: 'Residential',
      size: '2BHK',
    },
    {
      title: 'Boduppal Residence',
      img: '/assets/Boduppal.jpg',
      category: 'Premium Interiors',
      size: '4BHK',
    },
    {
      title: 'Aditya Villa Grande',
      img: '/assets/Aditya-Villa.jpg',
      category: 'Premium Villa',
      size: 'Duplex',
    },
    {
      title: 'TNR Sulakshana · C-718',
      img: '/assets/TNR-Sulakshana-C-Block-718.jpg',
      category: 'Modular Kitchen',
      size: '3BHK',
    },
    {
      title: 'Aparna Sarovar Grand',
      img: '/assets/Aparna-Sarovar-Grand.jpg',
      category: 'Residential',
      size: '3BHK',
    },
    {
      title: 'TNR Sulakshana · E-612',
      img: '/assets/TNR-sulakashana-E-Block-111.jpg',
      category: 'Modular',
      size: '2BHK',
    },
    {
      title: 'Subishi Gouthami Kompally',
      img: '/assets/Subishi-Gouthami-Kompally.jpg',
      category: 'Commercial',
      size: 'Office Space',
    },
    {
      title: 'TNR Sulakshana · E-111',
      img: '/assets/TNR-Sulakshana-E-Block-111.jpg',
      category: 'Modular',
      size: '3BHK',
    },
  ];

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.prj-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach((card) => observer.observe(card));

    const revealEls = document.querySelectorAll('.prj-reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }
}
