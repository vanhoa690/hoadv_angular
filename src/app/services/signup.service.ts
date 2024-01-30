import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  http = inject(HttpClient);

  constructor() {}

  // function ket noi API - service
  signUpUser(user: any) {
    //POST: body
    return this.http.post(
      'https://hoadv-nodejs.vercel.app/auth/register',
      user
    );
  }
}
