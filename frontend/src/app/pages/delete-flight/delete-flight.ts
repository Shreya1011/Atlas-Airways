import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-admin-delete-flight',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './delete-flight.html',
  styleUrls: ['./delete-flight.css']
})
export class DeleteFlightComponent {
  flights: any[] = [];

  constructor() {
    this.loadFlights();
  }

  loadFlights() {
    const data = localStorage.getItem('flights');
    this.flights = data ? JSON.parse(data) : [];
  }

  deleteFlight(index: number) {
    if (confirm(`Are you sure you want to delete flight ${this.flights[index].flightNumber}?`)) {
      this.flights.splice(index, 1);
      localStorage.setItem('flights', JSON.stringify(this.flights));
      alert('Flight deleted successfully!');
      this.loadFlights(); // Refresh list
    }
  }
}
