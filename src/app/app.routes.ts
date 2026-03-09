import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Projects } from './projects/projects';
import { Modular } from './modular/modular';
import { Header } from './header/header';
import { Footer } from './footer/footer';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'modular', component: Modular },

  // Optional: If no route matches → redirect to home
  { path: '**', redirectTo: '' },
];