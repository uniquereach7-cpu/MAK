import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './herosection.html',
  styleUrl: './herosection.css',
})
export class Herosection implements OnInit, OnDestroy {
  // WebP versions created by compress-images.mjs — 98% smaller than originals
  images: string[] = [
    'assets/mak9.webp',
    'assets/mak1.webp',
    'assets/mak6.webp'
  ];
  
  currentIndex: number = 0;
  private intervalId: any;

  // 1. Inject ChangeDetectorRef here
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      
      // 2. Force Angular to update the view so the image changes immediately
      this.cdr.detectChanges(); 
      
    }, 3000);
  }

  stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
