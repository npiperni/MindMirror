import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { scaleIn, scaleOut } from '../animations';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { UserDTO } from 'src/app/models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '500ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '500ms' } }),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  menu = false; // Menu is closed by default
  userSubscription: Subscription = new Subscription();
  myUser!: UserDTO;

  constructor(
    public userService: UserService,
    public authService: AuthService
  ) {}

  async ngOnInit() {
    this.userSubscription = this.userService.myUser.subscribe((user) => {
      this.myUser = user;
    });
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  /**
   * Logs out the current user.
   */
  async logOut() {
    this.userService.updateUser(null);
    await this.authService.SignOut();
  }
}
