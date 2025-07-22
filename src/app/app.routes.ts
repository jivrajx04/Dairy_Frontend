import { Routes } from '@angular/router';


export const routes: Routes = [
  
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {
        path: 'dashboard',
        loadComponent: ()=> import('./components/dashboard-overview/dashboard-overview').then(m => m.DashboardOverview),
        title: 'Dashboard Overview'
    }
];
