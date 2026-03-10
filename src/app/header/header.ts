import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  navigateToTestimonials() {
    this.closeMenu();
    // Navigate to home with testimonials fragment
    this.router.navigate(['/home'], { fragment: 'testimonials' });
  }

  // Close menu on outside click or Escape key
  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }
}
