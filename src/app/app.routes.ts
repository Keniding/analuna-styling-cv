import { Routes } from '@angular/router';
import { environment } from '@environments/environment';
import { Default } from '@layout/default/default';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'me',
    pathMatch: 'full'
  },
  {
    path: 'me',
    component: Default,
    title: environment.titles.main,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      // Dashboard
    ]
  },
  // 404 - Not Found
  {
    path: '**',
    redirectTo: 'api/inicio/not-found'
  }
];
