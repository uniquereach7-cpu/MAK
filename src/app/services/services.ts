import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit {

  @ViewChildren('serviceCard') cards!: QueryList<ElementRef>;

  services: ServiceItem[] = [
    {
      id: '01',
      title: 'Interior Designing',
      shortDesc: 'Spaces that speak your personality',
      fullDesc:
        'We craft living environments that blend aesthetics with function — balancing light, texture, and form to create homes that feel as beautiful as they look.',
      image: 'assets/hero1.jpg',
      tag: 'SIGNATURE',
      icon: '◈',
    },
    {
      id: '02',
      title: 'Modular Kitchen',
      shortDesc: 'Smart kitchens for modern lifestyles',
      fullDesc:
        'Precision-engineered modular kitchen solutions that maximize every inch of space with premium finishes, smart storage, and ergonomic layouts built for how you truly live.',
      image: 'assets/hero2.jpg',
      tag: 'POPULAR',
      icon: '◇',
    },
    {
      id: '03',
      title: '3D Designs',
      shortDesc: 'See your dream before it is built',
      fullDesc:
        'Photo-realistic 3D renderings that bring your vision to life before a single wall is touched — refine every detail with total confidence and creative clarity.',
      image: 'assets/hero3.jpg',
      tag: 'TECHNOLOGY',
      icon: '◉',
    },
    {
      id: '04',
      title: 'Customised Furniture',
      shortDesc: 'Built for you, fitted to perfection',
      fullDesc:
        'Every piece of furniture is crafted to your exact specifications — in your choice of material, finish, and dimension — ensuring it fits your space and lifestyle perfectly.',
      image: 'assets/hero4.jpg',
      tag: 'BESPOKE',
      icon: '⬡',
    },
    {
      id: '05',
      title: 'False Ceiling',
      shortDesc: 'Elevate every room from above',
      fullDesc:
        'From coffered to cove, our ceiling designs define depth and drama in any room — integrating lighting seamlessly to sculpt atmosphere and enhance spatial flow.',
      image: 'assets/hero5.jpg',
      tag: 'ARCHITECTURAL',
      icon: '◫',
    },
    {
      id: '06',
      title: 'Wardrobes',
      shortDesc: 'Organised elegance for every style',
      fullDesc:
        'Sleek, personalised wardrobe systems that transform storage into a design statement — with custom compartments, mirrored panels, and finishes that complement your space.',
      image: 'assets/about.jpg',
      tag: 'STORAGE',
      icon: '▣',
    },
    {
      id: '07',
      title: 'Designer Beds',
      shortDesc: 'Where comfort meets craftsmanship',
      fullDesc:
        'Our custom bed designs merge structural elegance with plush comfort — upholstered headboards, platform frames, and storage-integrated bases that redefine your sanctuary.',
      image: 'assets/Aditya-Villa.jpg',
      tag: 'LUXURY',
      icon: '◎',
    },
    {
      id: '08',
      title: 'Wall Texture',
      shortDesc: 'Surfaces that tell a story',
      fullDesc:
        'Expert application of decorative wall textures, micro-cement finishes, and bespoke wall treatments that add dimension, warmth, and artistic flair to any interior.',
      image: 'assets/Boduppal.jpg',
      tag: 'FINISHING',
      icon: '⬟',
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe intro text elements
    document.querySelectorAll('.srv-intro, .srv-intro__tag, .srv-intro__heading, .srv-intro__desc, .srv-stats__item').forEach((el) =>
      observer.observe(el)
    );

    // Observe service cards with staggered delay applied via CSS variable
    this.cards.forEach((card, i) => {
      const el = card.nativeElement as HTMLElement;
      el.style.setProperty('--stagger', `${(i % 3) * 130}ms`);
      observer.observe(el);
    });
  }
}
