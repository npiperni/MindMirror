import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDTO } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent {
  email = '';
  myUser!: UserDTO;
  userSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  async ngOnInit() {
    this.userSubscription = this.userService.myUser.subscribe((user) => {
      this.myUser = user;
    });
  }

  async onSubmit() {
    let uid = await this.authService.getUser().uid;
    const friend = await this.userService.getUserByEmail(this.email);
    if (!friend) {
      this.notificationService.sendAlert('User not found');
      this.email = '';
      return;
    }
    if (friend.ID === uid) {
      this.notificationService.sendAlert('You cannot add yourself as a friend');
      this.email = '';
      return;
    }
    if (this.myUser.Friends?.includes(friend.ID)) {
      this.notificationService.sendAlert('User is already your friend');
      this.email = '';
      return;
    }
    try {
      await this.userService.addFriend(uid, friend.ID);
      this.email = '';
      this.notificationService.sendNotification('Friend added');
    } catch (error) {
      this.notificationService.sendAlert('Failed to add friend');
    }
  }
}
