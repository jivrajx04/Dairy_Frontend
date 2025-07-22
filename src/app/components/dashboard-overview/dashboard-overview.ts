import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
declare const lucide: any;

@Component({
  selector: 'app-dashboard-overview',
  imports: [CommonModule],
  templateUrl: './dashboard-overview.html',
  styleUrl: './dashboard-overview.scss'
})
export class DashboardOverview {

  currentDate: string= '';

  ngOnInit():void{
    this.currentDate = new Date().toLocaleDateString('en-IN',{
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

     if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

   ngAfterViewInit(): void {
   
  }
}
