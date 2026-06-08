import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../question';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {

  questions: Question[] = [
    new Question(1,'What is the difference between git pull and git fetch?'),
    new Question(2,'How do I undo the most recent local commits in Git?'),
    new Question(3,'How do I undo git add before commit?'),
    new Question(4,'What and where are the stack and heap?'),
    new Question(5,'How to make Git forget a file?')
  ];

}