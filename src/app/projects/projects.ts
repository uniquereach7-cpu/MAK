import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Project {
  title: string;
  img: string;
  category: string;
  size?: string;
  link: string; // Added to handle navigation
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
      title: 'JANWADA MOKILA Independent House',
      img: '/assets/media1.jpeg', // Replace with your actual image path
      category: 'Residential',
      size: 'Independent House',
      link: '/projects/janwada-mokila'   // Replace with your actual route
    },
    {
      title: 'MAK Designs Experience Centre',
      img: '/assets/projects-mak.jpeg', // Replace with your actual image path
      category: 'Commercial',
      size: 'Experience Centre',
      link: '/projects/mak-experience-centre'   // Replace with your actual route
    }
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