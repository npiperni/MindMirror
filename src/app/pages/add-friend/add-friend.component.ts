import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent {
  email = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  async onSubmit() {
    console.log('Add friend');
    let uid = await this.authService.getUser().uid;
    const friend = await this.userService.getUserByEmail(this.email);
    if (!friend) {
      this.notificationService.sendAlert('User not found');
      return;
    }
    if (friend.ID === uid) {
      this.notificationService.sendAlert('You cannot add yourself as a friend');
      return;
    }
    try {
      await this.userService.addFriend(uid, friend.ID);
      alert('Friend added');
    } catch (error) {
      this.notificationService.sendAlert('Failed to add friend');
    }
  }
}
