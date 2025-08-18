import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-admin-add-flight',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './add-flight.html',
  styleUrls: ['./add-flight.css']
})
export class AddFlightComponent {
  flightForm: FormGroup;

  constructor() {
    this.flightForm = new FormGroup({
      airline: new FormControl('', Validators.required),
      flightNumber: new FormControl('', Validators.required),
      departure: new FormControl('', Validators.required),
      arrival: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      fareEconomy: new FormControl('', [Validators.required, Validators.min(0)]),
      fareBusiness: new FormControl('', [Validators.required, Validators.min(0)]),
      availableSeatsEconomy: new FormControl('', [Validators.required, Validators.min(0)]),
      availableSeatsBusiness: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    if (this.flightForm.valid) {
      const flights = JSON.parse(localStorage.getItem('flights') || '[]');
      flights.push(this.flightForm.value);
      localStorage.setItem('flights', JSON.stringify(flights));
      alert("Flight added successfully!");
      this.flightForm.reset();
    } else {
      alert("Please fill all fields correctly.");
    }
  }
}
