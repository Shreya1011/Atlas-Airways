import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './search-flight.html',
  styleUrls: ['./search-flight.css']
})
export class SearchFlightComponent {
  searchForm: FormGroup;

  constructor(private router: Router) {
    this.searchForm = new FormGroup({
      type: new FormControl('oneway', Validators.required),
      source: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      departureDate: new FormControl('', Validators.required),
      returnDate: new FormControl(''),
      adults: new FormControl(1, [Validators.required, Validators.min(1)]),
      children: new FormControl(0, [Validators.required, Validators.min(0)]),
      infants: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log("Search Data:", this.searchForm.value);
      // Navigate to Flight List page with form data
      this.router.navigate(['/flight-list'], { state: { searchData: this.searchForm.value } });
    } else {
      alert("Please fill all required fields correctly.");
    }
  }
}
