import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-select-seat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './select-seat.html',
  styleUrls: ['./select-seat.css']
})
export class SelectSeatComponent {
  flightData: any;
  passengerForm: FormGroup;

  constructor(private router: Router) {
    const data = localStorage.getItem('selectedFlight');
    this.flightData = data ? JSON.parse(data) : null;

    // Initialize form with FormArray for passengers
    this.passengerForm = new FormGroup({
      passengers: new FormArray([])
    });

    if (this.flightData) {
      const totalPassengers = this.flightData.passengers.adults + this.flightData.passengers.children + this.flightData.passengers.infants;
      const passengerArray = this.passengerForm.get('passengers') as FormArray;

      for (let i = 0; i < totalPassengers; i++) {
        passengerArray.push(new FormGroup({
          fullName: new FormControl('', Validators.required),
          age: new FormControl('', [Validators.required, Validators.min(0)])
        }));
      }
    }
  }

  get passengers() {
    return (this.passengerForm.get('passengers') as FormArray).controls;
  }

  onSubmit() {
    if (this.passengerForm.valid) {
      // Save passenger details to localStorage
      localStorage.setItem('passengerDetails', JSON.stringify(this.passengerForm.value.passengers));
      alert("Passenger details saved!");
      this.router.navigate(['/payment']);
    } else {
      alert("Please fill all passenger details correctly.");
    }
  }
}
