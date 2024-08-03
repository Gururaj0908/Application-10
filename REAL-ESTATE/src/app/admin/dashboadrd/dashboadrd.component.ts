import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboadrd',
  templateUrl: './dashboadrd.component.html',
  styleUrl: './dashboadrd.component.css'
})
export class DashboadrdComponent {

  ELEMENT_DATA=   [
    {slno: 1, placeName: 'Bangalore', noOfDays: 36, time: '10:00 AM', date: '2024-01-01'},
    {slno: 2, placeName: 'Delhi 2', noOfDays: 36, time: '11:00 AM', date: '2024-01-02'},
    {slno: 3, placeName: 'mangalore 3', noOfDays: 36, time: '12:00 PM', date: '2024-01-03'},
    {slno: 4, placeName: 'West bengal 4', noOfDays: 36, time: '01:00 PM', date: '2024-01-04'},
    {slno: 5, placeName: 'Chennai 5', noOfDays: 36, time: '02:00 PM', date: '2024-01-05'},
    {slno: 6, placeName: 'Hydrabad 6', noOfDays: 36, time: '03:00 PM', date: '2024-01-06'},
    {slno: 7, placeName: 'Rajastan 7', noOfDays: 36, time: '04:00 PM', date: '2024-01-07'},
    {slno: 8, placeName: 'Patna 8', noOfDays: 36, time: '05:00 PM', date: '2024-01-08'},
    {slno: 9, placeName: 'Mumbai 9', noOfDays: 36, time: '06:00 PM', date: '2024-01-09'},
    {slno: 10, placeName: 'Alhabad 10', noOfDays: 36, time: '07:00 PM', date: '2024-01-10'}
  ];
  
  
    displayedColumns: string[] = ['slno', 'placeName', 'noOfDays', 'time', 'date'];
    dataSource = this.ELEMENT_DATA;
  
}
