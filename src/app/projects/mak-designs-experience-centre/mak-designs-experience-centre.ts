import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mak-designs-experience-centre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mak-designs-experience-centre.html',
  styleUrls: ['./mak-designs-experience-centre.css']
})
export class MakDesignsExperienceCentre {
  images = [
    'assets/Mak-Exp1.JPG',
    'assets/Mak-Exp2.JPG',
    'assets/Mak-Exp3.JPG',
    'assets/Mak-Exp4.JPG',
    'assets/Mak-Exp5.JPG',
    'assets/Mak-Exp6.JPG',
    'assets/Mak-Exp7.JPG',
    'assets/Mak-Exp8.JPG',
    'assets/Mak-Exp9.JPG',
    'assets/Mak-Exp10.JPG',
    'assets/Mak-Exp11.JPG',
    'assets/Mak-Exp12.JPG'
  ];
}
