import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  fareEconomy: number;
  fareBusiness: number;
  availableSeatsEconomy: number;
  availableSeatsBusiness: number;
}

@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './flight-list.html',
  styleUrls: ['./flight-list.css']
})
export class FlightListComponent {
  searchData: any;
  flights: Flight[] = [];

  constructor(private router: Router) {
    // Receive search data from previous page
    this.searchData = history.state.searchData || null;

    // For demo, create some mock flights
    this.flights = [
      {
        id: 1,
        airline: 'Airline A',
        flightNumber: 'AA101',
        departure: this.searchData?.source || 'City A',
        arrival: this.searchData?.destination || 'City B',
        departureTime: '10:00 AM',
        arrivalTime: '12:00 PM',
        fareEconomy: 5000,
        fareBusiness: 8000,
        availableSeatsEconomy: 10,
        availableSeatsBusiness: 5
      },
      {
        id: 2,
        airline: 'Airline B',
        flightNumber: 'BB202',
        departure: this.searchData?.source || 'City A',
        arrival: this.searchData?.destination || 'City B',
        departureTime: '02:00 PM',
        arrivalTime: '04:00 PM',
        fareEconomy: 4500,
        fareBusiness: 7500,
        availableSeatsEconomy: 8,
        availableSeatsBusiness: 2
      }
    ];
  }

  selectFlight(flight: Flight, classType: string) {
    // Store selected flight and class in localStorage for next page
    localStorage.setItem('selectedFlight', JSON.stringify({ flight, classType, passengers: this.searchData }));
    // Navigate to Select Seat page
    this.router.navigate(['/select-seat']);
  }
}
