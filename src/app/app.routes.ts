import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'bar', component: BarComponent },
    { path: 'baz', loadComponent: () => import('./baz/baz.component').then(m => m.BazComponent) }
];
