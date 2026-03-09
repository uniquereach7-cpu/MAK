import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  target: number;
  displayCount: number;
  suffix: string;
  label: string;
  icon: string;
}

interface WhyFeature {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

  stats: Stat[] = [
    { target: 15,  displayCount: 15, suffix: '+',  label: 'Ongoing Projects',    icon: '🏛' },
    { target: 100, displayCount: 100, suffix: '+', label: 'Satisfied Clients',   icon: '👥' },
    { target: 200, displayCount: 60, suffix: '+', label: 'Projects Completed',  icon: '💼' },
    { target: 10,  displayCount: 20, suffix: '+', label: 'Years of Excellence', icon: '⭐' },
  ];

  whyFeatures: WhyFeature[] = [
    {
      icon: '🏆',
      title: 'Award-Winning Design',
      desc: 'TV5 A&ID Awards 2019 Nominated For Best Interiors — our work is recognised for design excellence across the industry.',
    },
    {
      icon: '🏗',
      title: 'Expert Multidisciplinary Team',
      desc: 'Architects, interior designers, 3D visualizers, draftsmen, project managers and site supervisors — all under one roof.',
    },
    {
      icon: '✨',
      title: 'Premium Craftsmanship',
      desc: 'Uncompromising standards in material selection, finishing and execution with meticulous attention to every detail.',
    },
    {
      icon: '🔑',
      title: 'Complete Turnkey Solutions',
      desc: 'From concept to completion — we handle design, procurement, execution and handover, delivering a seamless experience.',
    },
    {
      icon: '📐',
      title: 'Client-Centric Process',
      desc: 'We listen, collaborate and translate your unique vision into a space that reflects your personality and lifestyle.',
    },
    {
      icon: '🌟',
      title: 'Proven Portfolio',
      desc: '200+ successful projects across residential and commercial spaces in Hyderabad — and many more stories to tell.',
    },
  ];

  private statsAnimated = false;

  ngAfterViewInit() {
    // Scroll reveal for all .abt-reveal elements
    const revealEls = document.querySelectorAll('.abt-reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // Counter animation triggered when stats section enters view
    const statsSection = document.querySelector('.abt-stats');
    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.statsAnimated) {
              this.statsAnimated = true;
              this.animateAllCounters();
            }
          });
        },
        { threshold: 0.25 }
      );
      statsObserver.observe(statsSection);
    }
  }

  private animateAllCounters() {
    this.stats.forEach((stat, idx) => {
      const delay = idx * 150;
      setTimeout(() => this.animateSingleCounter(stat), delay);
    });
  }

  private animateSingleCounter(stat: Stat) {
    const duration = 2000;
    const totalFrames = 60;
    const frameTime = duration / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease-out: faster at start, slows near end
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      stat.displayCount = Math.round(stat.target * progress);
      if (frame >= totalFrames) {
        stat.displayCount = stat.target;
        clearInterval(timer);
      }
    }, frameTime);
  }
}
