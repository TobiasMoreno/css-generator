import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./box-shadow.component').then(m => m.BoxShadowComponent)
  },
] as Routes;
