import { Routes } from '@angular/router';
import { environment } from '@environments/environment';
import { Default } from '@layout/default/default';

export const routes: Routes = [
  {
    path: '',
    component: Default,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home),
        title: environment.titles.main
      },
      {
        // Alias histórico: canonicaliza a la raíz en vez de duplicar contenido en /home.
        path: 'home',
        redirectTo: ''
      },
      /*
      {
        path: 'servicios',
        loadComponent: () => import('./features/servicios/servicios').then(m => m.Servicios),
        title: 'Servicios - ' + environment.titles.main
      },
      {
        path: 'portafolio',
        loadComponent: () => import('./features/portafolio/portafolio').then(m => m.Portafolio),
        title: 'Portafolio - ' + environment.titles.main
      },
      {
        path: 'sobre-mi',
        loadComponent: () => import('./features/sobre-mi/sobre-mi').then(m => m.SobreMi),
        title: 'Sobre Mí - ' + environment.titles.main
      },
      {
        path: 'contacto',
        loadComponent: () => import('./features/contacto/contacto').then(m => m.Contacto),
        title: 'Contacto - ' + environment.titles.main
      }
       */
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
