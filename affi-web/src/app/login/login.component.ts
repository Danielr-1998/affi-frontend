import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'affi-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('tempToken', res.tempToken);
        this.router.navigate(['/mfa']);
      },
      error: () => (this.error = 'Credenciales inválidas'),
    });
  }
}
