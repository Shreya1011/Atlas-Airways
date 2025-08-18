import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      title: new FormControl('', Validators.required),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/)
      ]),
      confirmPassword: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)])
    }, this.passwordMatchValidator);
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(control: import('@angular/forms').AbstractControl) {
    const form = control as FormGroup;
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log("Registration Data:", this.registrationForm.value);
      alert("Registration Successful!");
      this.registrationForm.reset();
    } else {
      alert("Please fill all fields correctly.");
    }
  }
}
