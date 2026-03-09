import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herosection.html',
  styleUrl: './herosection.css',
})
export class Herosection implements OnInit, OnDestroy {
  images: string[] = [
    'assets/hero1.jpg', // Make sure these match your exact file extensions (.jpg vs .jpeg)
    'assets/hero2.jpg',
    'assets/hero3.jpg'
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