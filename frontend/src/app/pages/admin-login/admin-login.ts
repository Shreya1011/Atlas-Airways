import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css']
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  // Hardcoded admin credentials
  private adminEmail = 'admin@admin.com';
  private adminPassword = 'Admin@123';

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (email === this.adminEmail && password === this.adminPassword) {
      alert("Admin Login Successful!");
      this.router.navigate(['/admin-dashboard']);
    } else {
      alert("Invalid credentials!");
    }
  }
}
