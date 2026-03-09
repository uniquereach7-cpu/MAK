import { Component } from '@angular/core';
import { Herosection } from './herosection/herosection';
import { Aboutsection } from './aboutsection/aboutsection';
import { ProcessSection } from './processsection/processsection';
import { WhySection } from './whysection/whysection';
import { Modularsection } from './modularsection/modularsection';
import { Projectsection } from './projectsection/projectsection';
import { Testimonialsection } from './testimonialsection/testimonialsection';


@Component({
  selector: 'app-home',
  imports: [Herosection,Aboutsection,ProcessSection,WhySection,Modularsection,Projectsection,Testimonialsection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
