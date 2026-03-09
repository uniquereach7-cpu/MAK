import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('MAK');
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    // Handle scroll on navigation end
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        // Delay to let the page render, then check for fragment
        setTimeout(() => {
          const fragment = this.router.parseUrl(this.router.url).fragment;
          if (fragment) {
            // If there's a fragment, scroll to that element
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } else {
            // Otherwise, scroll to top
            window.scrollTo({ top: 0, behavior: 'auto' });
          }
        }, 200);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
