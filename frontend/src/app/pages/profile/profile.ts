import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

interface Booking {
  flight: any;
  classType: string;
  passengers: any[];
  amountPaid: number;
  bookingDate: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  bookings: Booking[] = [];

  constructor() {
    const bookingData = localStorage.getItem('bookingConfirmation');
    if (bookingData) {
      this.bookings = [JSON.parse(bookingData)];
    }
  }

  cancelBooking(index: number) {
    const booking = this.bookings[index];
    const refundAmount = booking.amountPaid * 0.9; // 10% deduction

    if (confirm(`Are you sure you want to cancel this booking? Refund: ₹${refundAmount}`)) {
      this.bookings.splice(index, 1);
      localStorage.removeItem('bookingConfirmation');
      alert(`Booking cancelled. ₹${refundAmount} will be refunded.`);
    }
  }
}
