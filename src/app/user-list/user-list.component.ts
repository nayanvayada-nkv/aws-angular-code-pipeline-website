import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: User[] = [
    new User(
      'Gordon Linoff',
      '13/04/1979',
      '9563234567',
      'New York, US',
      'https://i.pravatar.cc/150?img=1'
    ),
    new User(
      'Jezreel',
      '24/05/1985',
      '9563234568',
      'Bratislava, Slovakia',
      'https://i.pravatar.cc/150?img=2'
    ),
    new User(
      'T.J. Crowder',
      '28/11/1989',
      '9563234569',
      'United Kingdom',
      'https://i.pravatar.cc/150?img=3'
    ),
    new User(
      'Marc Gravell',
      '15/09/1987',
      '9563234570',
      'United Kingdom',
      'https://i.pravatar.cc/150?img=4'
    )
  ];

}