import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://hoadv-nodejs.vercel.app/auth/res';
  constructor() {}

  // Register
  registerUser() {}
  // Login
  loginUser() {}
}
