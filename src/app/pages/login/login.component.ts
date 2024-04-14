import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading: boolean = false;
  user = {
    email: '',
    password: '',
  };

  constructor(
    public authService: AuthService,
    public userService: UserService,
    public router: Router,
    public notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  async onSubmit() {
    this.loading = true;
    await this.authService.SignIn(this.user.email, this.user.password);
    let myUser = this.authService.getUser();
    if (myUser) {
      myUser = (await this.userService.getUser(myUser.uid)) as UserDTO;
      if (!myUser) {
        this.authService.SignOut();
        this.userService.updateUser(null);
        this.notificationService.sendAlert(
          'User not found or account disabled'
        );
      } else {
        await this.userService.updateUser(myUser);
        this.router.navigate(['']);
      }
    }
    this.loading = false;
  }
}
