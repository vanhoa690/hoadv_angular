import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm, LoginFormResponse } from '../types/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  constructor() {}

  login(user: LoginForm) {
    return this.http.post<LoginFormResponse>(
      'https://hoadv-nodejs.vercel.app/auth/login',
      user
    );
  }
}
