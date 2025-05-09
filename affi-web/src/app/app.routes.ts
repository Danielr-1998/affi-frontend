import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MfaComponent } from './mfa/mfa.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mfa', component: MfaComponent },
];
