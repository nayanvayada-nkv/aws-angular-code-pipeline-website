import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { QuestionListComponent } from './question-list/question-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'questions',
    component: QuestionListComponent
  }
];