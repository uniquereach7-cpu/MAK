import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Project {
  title: string;
  img: string;   
  href?: string; 
}

@Component({
  selector: 'app-projectsection',
  imports: [CommonModule, RouterLink],
  templateUrl: './projectsection.html',
  styleUrls: ['./projectsection.css']
})
export class Projectsection {
  @Input() projects: Project[] = [
    { 
      title: 'JANWADA MOKILA Independent house', 
      img: '/assets/media1.webp',
      href: '/projects/janwada-mokila' 
    },
    { 
      title: 'MAK Designs Experience Centre', 
      img: '/assets/projects-mak.webp',
      href: '/projects/mak-experience-centre' 
    }
  ];
}