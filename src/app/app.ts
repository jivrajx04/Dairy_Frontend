import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FarmerForm } from './pages/farmer-form/farmer-form';
import { CustomerForm } from './pages/customer-form/customer-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FarmerForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
