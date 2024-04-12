import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { scaleIn, scaleOut } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '1000ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '1000ms' } }),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  menu = true;
  toggleMenu() {
    this.menu = !this.menu;
  }
}
