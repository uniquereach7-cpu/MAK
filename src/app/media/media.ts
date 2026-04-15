import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type VideoType = 'landscape' | 'portrait';

interface VideoItem {
  title: string;
  embedUrl: SafeResourceUrl;
  watchUrl: string;
  type: VideoType;
}

interface GalleryImage {
  src: string;
  alt: string;
}

// 1. Add an interface for the Reels
interface ReelItem {
  title: string;
  embedUrl: SafeResourceUrl;
  watchUrl: string;
}

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class Media {
  videos: VideoItem[] = [];
  galleryImages: GalleryImage[] = [];
  reels: ReelItem[] = []; // 2. Add the reels array

  constructor(private sanitizer: DomSanitizer) {
    this.videos = [
      {
        title: 'Marina Skies 3BHK Tour',
        embedUrl: this.getEmbedUrl('https://youtu.be/bLl632lFGJg?si=6tPn0cOw8nBWZMya'),
        watchUrl: 'https://youtu.be/bLl632lFGJg?si=6tPn0cOw8nBWZMya',
        type: 'landscape'
      },
      {
        title: 'Mayfai Apartment 2BHK Tour',
        embedUrl: this.getEmbedUrl('https://youtu.be/EGe6E-qySAA?si=l0Gl8awK-lXYXE4c'),
        watchUrl: 'https://youtu.be/EGe6E-qySAA?si=l0Gl8awK-lXYXE4c',
        type: 'landscape'
      },
      {
        title: 'Aparna Serene Park 3BHK Tour',
        embedUrl: this.getEmbedUrl('https://youtu.be/9hRZmyMbWaw?si=ixaXu-e0QO4Hb3aD'),
        watchUrl: 'https://youtu.be/9hRZmyMbWaw?si=ixaXu-e0QO4Hb3aD',
        type: 'landscape'
      },
      {
        title: 'Jain Carlton Creek 2BHK Tour',
        embedUrl: this.getEmbedUrl('https://youtu.be/c4TDd0C9A6g?si=XMgTH7xtDI2x1bDw'),
        watchUrl: 'https://youtu.be/c4TDd0C9A6g?si=XMgTH7xtDI2x1bDw',
        type: 'landscape'
      }
    ];

    // 3. Add your 4 Instagram Reels (Just replace the watchUrls with your actual links)
    this.reels = [
      {
        title: 'Modular Kitchen Walkthrough',
        embedUrl: this.getIgEmbedUrl('https://www.instagram.com/reel/DWyzMioT9pP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='),
        watchUrl: 'https://www.instagram.com/reel/DWyzMioT9pP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
      },
      {
        title: 'Living Room Transformation',
        embedUrl: this.getIgEmbedUrl('https://www.instagram.com/reel/DWMNVD3zNYe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='),
        watchUrl: 'https://www.instagram.com/reel/DWMNVD3zNYe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
      }
    ];

    this.galleryImages = [
      { src: 'assets/media1.jpeg', alt: 'Interior gallery image 1' },
      { src: 'assets/projects-kitchen.jpeg', alt: 'Interior gallery image 2' },
      { src: 'assets/projects-partition.jpeg', alt: 'Interior gallery image 3' },
      { src: 'assets/projects10.JPG', alt: 'Interior gallery image 4' },
      { src: 'assets/projects2.JPG', alt: 'Interior gallery image 5' },
      { src: 'assets/projects8.JPG', alt: 'Interior gallery image 6' },
      { src: 'assets/projects4.JPG', alt: 'Interior gallery image 7' },
      { src: 'assets/projects11.JPG', alt: 'Interior gallery image 8' },
      { src: 'assets/projects9.JPG', alt: 'Interior gallery image 9' }
    ];
  }

  private getEmbedUrl(link: string): SafeResourceUrl {
    const videoId = this.extractVideoId(link);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
    );
  }

  // 4. Add this helper function for Instagram Reels
  private getIgEmbedUrl(link: string): SafeResourceUrl {
    // Strips query parameters and appends 'embed' to the URL
    let baseUrl = link.split('?')[0]; 
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}embed`);
  }

  private extractVideoId(link: string): string {
    if (link.includes('youtube.com/watch?v=')) {
      return link.split('v=')[1].split('&')[0];
    }
    if (link.includes('youtube.com/shorts/')) {
      return link.split('shorts/')[1].split('?')[0];
    }
    if (link.includes('youtu.be/')) {
      return link.split('youtu.be/')[1].split('?')[0];
    }
    return '';
  }
}