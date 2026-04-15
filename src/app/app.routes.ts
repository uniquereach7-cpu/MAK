import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Projects } from './projects/projects';
import { Modular } from './modular/modular';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Media } from './media/media';
import { JanwadaMokila } from './projects/janwada-mokila/janwada-mokila';
import { MakDesignsExperienceCentre } from './projects/mak-designs-experience-centre/mak-designs-experience-centre';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'modular', component: Modular },
  { path: 'media', component: Media },
  { path: 'projects/janwada-mokila', component: JanwadaMokila },
  { path: 'projects/mak-experience-centre', component: MakDesignsExperienceCentre },

  // Optional: If no route matches → redirect to home
  { path: '**', redirectTo: '' },
];