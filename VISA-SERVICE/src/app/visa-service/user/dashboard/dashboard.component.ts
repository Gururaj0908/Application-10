import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  currentStep = 3; // Example current step
  steps = [
    {name: 'Dates', icon: 'calendar_today'},
    {name: 'Photo', icon: 'photo'},
    {name: 'Passport', icon: 'account_balance_wallet'},
    {name: 'Detail', icon: 'info'},
    {name: 'Checkout', icon: 'payment'}
  ];
}
