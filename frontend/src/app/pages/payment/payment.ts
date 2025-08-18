import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class PaymentComponent {
  flightData: any;
  passengers: any[] = [];
  paymentForm: FormGroup;
  totalFare: number = 0;

  constructor(private router: Router) {
    const flightInfo = localStorage.getItem('selectedFlight');
    const passengerInfo = localStorage.getItem('passengerDetails');

    this.flightData = flightInfo ? JSON.parse(flightInfo) : null;
    this.passengers = passengerInfo ? JSON.parse(passengerInfo) : [];

    if (this.flightData) {
      const farePerPassenger = this.flightData.classType === 'Economy'
        ? this.flightData.flight.fareEconomy
        : this.flightData.flight.fareBusiness;

      this.totalFare = farePerPassenger * this.passengers.length;
    }

    this.paymentForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/)]),
      cardHolder: new FormControl('', Validators.required),
      expiryDate: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}$/)])
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      // Mock payment success
      alert(`Payment of ₹${this.totalFare} Successful! Booking Confirmed.`);
      
      // Optionally, save booking to database or localStorage
      localStorage.setItem('bookingConfirmation', JSON.stringify({
        flight: this.flightData.flight,
        classType: this.flightData.classType,
        passengers: this.passengers,
        amountPaid: this.totalFare,
        bookingDate: new Date()
      }));

      // Clear temporary data
      localStorage.removeItem('selectedFlight');
      localStorage.removeItem('passengerDetails');

      // Redirect to Home or Profile page
      this.router.navigate(['/profile']);
    } else {
      alert("Please enter valid payment details.");
    }
  }
}
