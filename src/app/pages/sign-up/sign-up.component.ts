import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log(this.user);
  }
}
