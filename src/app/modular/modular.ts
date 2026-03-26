import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TabContent {
  tag: string;
  headingNormal: string;
  headingItalic: string;
  subheading: string;
  description: string;
  highlight: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-modular',
  imports: [CommonModule, RouterLink],
  templateUrl: './modular.html',
  styleUrl: './modular.css',
})
export class Modular {
  activeTab = 'modular-kitchens';

  tabs = [
    { id: 'modular-kitchens', label: 'Modular Kitchens' },
    { id: 'wardrobes-storage', label: 'Wardrobes & Storage Units' },
    { id: 'living-room-tv', label: 'Living Room & TV Units' },
    { id: 'custom-solutions', label: 'Custom Interior Solutions' },
  ];

  tabContent: Record<string, TabContent> = {
    'modular-kitchens': {
      tag: 'KITCHEN FIRST',
      headingNormal: 'Smart ',
      headingItalic: 'Modular Kitchens',
      subheading: 'Designed for daily life',
      description:
        'Our modular kitchens blend ergonomic layouts with durable materials and refined finishes. We design efficient workflows, integrate appliances, and create tailored storage so every inch works for you — making cooking easier and surfaces clutter-free.',
      highlight: 'Efficient, elegant, and easy to maintain.',
      image: 'assets/Modularkitchen.jpg',
      link: 'EXPLORE PROJECTS',
    },

    'wardrobes-storage': {
      tag: 'ORGANIZE',
      headingNormal: 'Built-in ',
      headingItalic: 'Wardrobes & Storage',
      subheading: 'Maximise your space',
      description:
        'Customizable wardrobes and storage systems that adapt to your belongings and room layout. Choose sliding or hinged doors, modular internal organizers, pull-out accessories, and finishes that match your interior for a seamless, high-functioning look.',
      highlight: 'Smart compartments for everyday ease.',
      image: 'assets/wardrobes-and-storage-units.jpg',
      link: 'EXPLORE PROJECTS',
    },

    'living-room-tv': {
      tag: 'LIVING BEAUTY',
      headingNormal: 'Stylish ',
      headingItalic: 'Living Room & TV Units',
      subheading: 'Form meets function',
      description:
        'Modular TV units, media walls, and display systems designed to anchor your living space. We focus on cable management, adaptable shelving, and modular sections that allow easy reconfiguration as your needs change.',
      highlight: 'Clean lines, practical storage, premium finishes.',
      image: 'assets/livingroom-and-tvunit.jpg',
      link: 'EXPLORE PROJECTS',
    },

    'custom-solutions': {
      tag: 'TAILORED',
      headingNormal: 'Custom ',
      headingItalic: 'Interior Solutions',
      subheading: 'Made-to-fit projects',
      description:
        'From study nooks and feature walls to office fit-outs and niche cabinetry, our custom modular solutions are engineered for unique briefs. We work with designers and architects to produce precision-made components and ensure smooth, professional installation.',
      highlight: 'Bespoke modules with factory precision.',
      image: 'assets/modhero4.jpg',
      link: 'EXPLORE PROJECTS',
    },
  };

  get currentTab(): TabContent {
    return this.tabContent[this.activeTab];
  }

  setActiveTab(id: string): void {
    this.activeTab = id;
  }
}
