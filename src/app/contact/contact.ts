import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit, OnDestroy {
  submitted = false;
  errorMessage = '';

  private observer?: IntersectionObserver;
  private submittedTimer?: ReturnType<typeof setTimeout>;

  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

async onSubmit() {
  if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.service) {
    return;
  }

  this.submitted = false;
  this.errorMessage = '';

  const templateParams = {
    name: this.formData.name,
    email: this.formData.email,
    phone: this.formData.phone,
    service: this.formData.service,
    message: this.formData.message,
  };

  try {
    await emailjs.send(
      'service_sse9ac9',
      'template_8be54lp',
      templateParams,
      'ArRVMcX03kSWudGZh'
    );

    this.submitted = true;

    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    };

    this.submittedTimer = setTimeout(() => {
      this.submitted = false;
    }, 5000);

  } catch (error) {
    console.error('EmailJS error:', error);
    this.errorMessage = 'Message could not be sent. Please try again.';
  }
}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.ctn-reveal').forEach((el) => {
        this.observer?.observe(el);
      });
    }, 50);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.submittedTimer) {
      clearTimeout(this.submittedTimer);
    }
  }
}