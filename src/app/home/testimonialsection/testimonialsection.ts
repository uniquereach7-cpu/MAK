import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  text: string;
  name: string;
  location?: string;
  // img removed from each testimonial — we use a single shared avatar instead
}

@Component({
  selector: 'app-testimonialsection',
  imports: [CommonModule],
  templateUrl: './testimonialsection.html',
  styleUrls: ['./testimonialsection.css']
})
export class Testimonialsection implements OnInit, OnDestroy {

  testimonials: Testimonial[] = [
    {
      text: `“My villa was abundant for many years. Approached MAK Interior Designs, Kavitha and her team look this challenging task and transform it in to fully functional architectural design worthy villa within the span of 8 monthly only.”`,
      name: 'Surya Prakash Reddy',
      location: 'Hyderabad'
    },
    {
      text: `“I saw MAK Interior Designs work in one of my friend’s home, I was astonished with their expertise and eye for detail — they did an excellent job on our new home.”`,
      name: 'Goka Rajendra',
      location: 'Chandanagar'
    },
    {
      text: `“Their service is fine and my overall experience has been good with these guys. Although a small delay occurred, the finish and attention to detail were top-notch.”`,
      name: 'Madhu Sudhan and Vasudha',
      location: 'Narsingi'
    },
    {
      text: `“My whole family was very much excited when we gave the contract of our house interiors to MAK Interior Designs. They delivered beyond expectations.”`,
      name: 'Sreedhar Mutalik Desai',
      location: 'Aparna Sarovar Grande'
    },
    {
      text: `“I approached MAK Interior Designs for my flat interiors and gave them full freedom — the result truly exceeded my expectations.”`,
      name: 'Bhongiri Naresh',
      location: 'TNR Sulakshana'
    }
  ];

  current = 0;
  private intervalId: any = null;
  private readonly delay = 3000; // 3 seconds

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.delay);
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next(): void {
    this.current = (this.current + 1) % this.testimonials.length;
  }

  prev(): void {
    this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goTo(i: number): void {
    this.current = i;
    this.startAutoplay(); // reset timer after manual change
  }

  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }
}