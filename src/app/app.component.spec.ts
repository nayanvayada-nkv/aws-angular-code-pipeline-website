import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users: User[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

}