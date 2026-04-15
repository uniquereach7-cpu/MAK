import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-janwada-mokila',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './janwada-mokila.html',
  styleUrls: ['./janwada-mokila.css']
})
export class JanwadaMokila {
  images = [
    'assets/Mokila1.webp',
    'assets/Mokila2.webp',
    'assets/Mokila3.webp',
    'assets/Mokila4.webp',
    'assets/Mokila5.webp',
    'assets/Mokila6.webp',
    'assets/Mokila7.webp',
    'assets/Mokila8.webp',
    'assets/projects-kitchen.webp',
    'assets/Mokila10.webp',
    'assets/Mokila11.webp',
    'assets/Mokila12.webp'
  ];
}
