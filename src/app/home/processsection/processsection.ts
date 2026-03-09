import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-processsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './processsection.html',
  styleUrls: ['./processsection.css'],
})
export class ProcessSection implements AfterViewInit {
  // Reduced/merged steps:
  steps = [
    {
      id: '01',
      title: 'Meet • Concept • Budget',
      subtitle: 'Initial consultation → brief → budget alignment',
      icon: 'assets/icons/meet-concept.svg', // optional
    },
    {
      id: '02',
      title: 'Design & Build',
      subtitle: 'Design development, visuals & construction planning',
      icon: 'assets/icons/design-build.svg',
    },
    {
      id: '03',
      title: 'Project Execution',
      subtitle: 'Site execution, QA and project management',
      icon: 'assets/icons/execution.svg',
    },
    {
      id: '04',
      title: 'Handover',
      subtitle: 'Final inspections, client walkthrough & handover',
      icon: 'assets/icons/handover.svg',
    },
  ];

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const container = this.host.nativeElement;
    const items = container.querySelectorAll('.step-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((it) => observer.observe(it));
  }
}