import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./gradient-css.component').then((m) => m.GradientCssComponent),
  },
] as Routes;
