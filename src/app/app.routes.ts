import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'children',
    pathMatch: 'full',
  },
  {
    path: 'children',
    loadComponent: () => import('./children/children.page').then( m => m.ChildrenPage)
  },
  {
    path: 'child-detail',
    loadComponent: () => import('./child-detail/child-detail.page').then( m => m.ChildDetailPage)
  },
  {
    path: 'campaigns',
    loadComponent: () => import('./campaigns/campaigns.page').then( m => m.CampaignsPage)
  },
];
