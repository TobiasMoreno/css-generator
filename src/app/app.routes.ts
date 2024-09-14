import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'box-shadow',
        loadChildren: () => import('./box-shadow/box-shadow.routes')
    },
    {
        path: 'gradient-css',
        loadChildren: () => import('./gradient-css/gradient-css.routes')
    }
];
