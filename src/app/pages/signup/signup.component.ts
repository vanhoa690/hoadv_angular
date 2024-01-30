import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUpService = inject(SignupService); // inject vao bien

  signUpUser = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit() {
    console.log(this.signUpUser);
    const user = {
      fullname: this.signUpUser.fullname,
      email: this.signUpUser.email,
      password: this.signUpUser.password,
    };
    this.signUpService.signUpUser(user).subscribe(() => {});
  }
}
