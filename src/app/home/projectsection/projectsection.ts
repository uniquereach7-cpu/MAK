import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Project {
  title: string;
  img: string;   // path relative to src/assets, e.g. '/assets/projects/project1.jpg'
  href?: string; // optional link
}

@Component({
  selector: 'app-projectsection',
  imports: [CommonModule],
  templateUrl: './projectsection.html',
  styleUrls: ['./projectsection.css']
})
export class Projectsection {
  /** Optional: pass a custom list from parent with [projects]="..." */
  @Input() projects: Project[] = [
    { title: 'Aparna Serene Park', img: '/assets/Aparna-Serene-Parl.jpg' },
    { title: 'Chandanagar Avantika Residency', img: '/assets/Chandanagr-Avantika Residency.jpg' },
    { title: 'Boduppal', img: '/assets/Boduppal.jpg' },
    { title: 'Aditya Villa Grande', img: '/assets/Aditya-Villa.jpg' },
    { title: 'TNR Sulakshana C Block 718', img: '/assets/TNR-Sulakshana-C-Block-718.jpg' },
    { title: 'Aparna Sarovar Grand', img: '/assets/Aparna-Sarovar-Grand.jpg' },
    { title: 'TNR Sulakshana E Block 612', img: '/assets/TNR-sulakashana-E-Block-111.jpg' },
    { title: 'Subishi Gouthami Kompally', img: '/assets/Subishi-Gouthami-Kompally.jpg' },
    { title: 'TNR Sulakshana E Block 111', img: '/assets/TNR-Sulakshana-E-Block-111.jpg' }
  ];
}