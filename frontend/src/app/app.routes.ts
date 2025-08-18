import { Routes } from '@angular/router';

// Import all standalone page components
import { HomeComponent } from './pages/home/home';
import { RegisterComponent } from './pages/register/register';
import { LoginComponent } from './pages/login/login';
import { SearchFlightComponent } from './pages/search-flight/search-flight';
import { FlightListComponent } from './pages/flight-list/flight-list';
import { SelectSeatComponent } from './pages/select-seat/select-seat';
import { PaymentComponent } from './pages/payment/payment';
import { ProfileComponent } from './pages/profile/profile';
import { AdminLoginComponent } from './pages/admin-login/admin-login';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard';
import { AddFlightComponent } from './pages/add-flight/add-flight';
import { DeleteFlightComponent } from './pages/delete-flight/delete-flight';
import { ViewFlightsComponent } from './pages/views-flights/views-flights';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-flight', component: SearchFlightComponent },
  { path: 'flight-list', component: FlightListComponent },
  { path: 'select-seat', component: SelectSeatComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add-flight', component: AddFlightComponent },
  { path: 'delete-flight', component: DeleteFlightComponent },
  { path: 'view-flights', component: ViewFlightsComponent },
  { path: '**', redirectTo: '' } // fallback route
];
