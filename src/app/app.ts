import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FarmerForm } from './pages/farmer-form/farmer-form';

@Component({
  selector: 'app-root',
  imports: [FarmerForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
