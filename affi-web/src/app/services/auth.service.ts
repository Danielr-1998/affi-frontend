import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ tempToken: string }>(`${this.apiUrl}/auth/login`, {
      username,
      password,
    });
  }

  verifyCode(tempToken: string, code: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/verify-2fa`, {
      tempToken,
      code,
    });
  }
}
