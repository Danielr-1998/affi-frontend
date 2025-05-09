import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'affi-mfa',
  templateUrl: './mfa.component.html',
})
export class MfaComponent {
  code = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    const tempToken = localStorage.getItem('tempToken');
    if (!tempToken) return (this.error = 'Token temporal no encontrado');

    this.auth.verifyCode(tempToken, this.code).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.removeItem('tempToken');
        this.router.navigate(['/dashboard']);
      },
      error: () => (this.error = 'Código incorrecto'),
    });
  }
}
