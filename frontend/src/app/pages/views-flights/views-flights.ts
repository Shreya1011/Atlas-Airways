import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-admin-view-flights',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './views-flights.html',
  styleUrls: ['./views-flights.css']
})
export class ViewFlightsComponent {
  flights: any[] = [];

  constructor() {
    const data = localStorage.getItem('flights');
    this.flights = data ? JSON.parse(data) : [];
  }
}
