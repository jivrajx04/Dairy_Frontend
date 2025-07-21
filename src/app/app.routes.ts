import { Routes } from '@angular/router';
import { FarmerForm } from './pages/farmer-form/farmer-form';
import { CustomerForm } from './pages/customer-form/customer-form';

export const routes: Routes = [
    {path:"farmer", component:FarmerForm},
    {path:"customer", component:CustomerForm}
];
