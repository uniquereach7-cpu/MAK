import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {

  submitted = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  onSubmit() {
    // TODO: Wire EmailJS here
    // e.g. emailjs.send('SERVICE_ID', 'TEMPLATE_ID', this.formData, 'PUBLIC_KEY')
    console.log('Form submitted:', this.formData);
    this.submitted = true;
    setTimeout(() => (this.submitted = false), 5000);
  }

  ngOnInit() {
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Small delay to let Angular render the template
    setTimeout(() => {
      document.querySelectorAll('.ctn-reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 50);
  }
}
