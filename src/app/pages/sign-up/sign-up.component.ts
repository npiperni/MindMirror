import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  Uploading: boolean = false;
  user = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    public authService: AuthService,
    public userService: UserService,
    public notificationService: NotificationService
  ) {}

  async onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      this.notificationService.sendAlert('Passwords do not match');
      return;
    }
    this.Uploading = true;

    let path: string = 'users/';
    let rid: string = '';
    rid = await this.authService.SignUp(this.user.email, this.user.password);
    if (rid == '') {
      this.Uploading = false;
      return;
    }
    await this.userService.registerUser(this.user, rid, path);
  }
}
