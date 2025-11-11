

import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-front-end-interview-qa',
  imports: [CommonModule],
  templateUrl: './front-end-interview-qa.html',
  styleUrl: './front-end-interview-qa.scss',
})
export class FrontEndInterviewQA {
constructor(private cdr: ChangeDetectorRef) {}
  questions = [
    {
      question: 'What is the difference between var, let, and const in JavaScript?',
      answer: 'var is function-scoped, while let and const are block-scoped. const cannot be reassigned, while let can.',
      videoUrl: 'https://www.youtube.com/watch?v=QwwxXwR2QPU',
      isAnswerVisible: false,
      isViewed: false
    },
    {
      question: 'What is the Virtual DOM in React?',
      answer: 'The Virtual DOM is an in-memory representation of the real DOM. React updates it first, then efficiently updates the real DOM when changes occur.',
      videoUrl: '',
      isAnswerVisible: false,
      isViewed: false
    },
    {
      question: 'Explain the purpose of Angular Directives.',
      answer: 'Angular Directives are special markers in templates that extend HTML. Examples include structural directives like *ngIf and attribute directives like ngClass.',
      videoUrl: 'https://www.youtube.com/watch?v=sx1iVw1F8Yw',
      isAnswerVisible: false,
      isViewed: false
    },
    {
      question: 'What are Promises in JavaScript?',
      answer: 'A Promise represents an asynchronous operation that can be pending, fulfilled, or rejected. It helps handle async code without deeply nested callbacks.',
      videoUrl: '',
      isAnswerVisible: false,
      isViewed: false
    }
  ];

  showAnswer(index: number): void {
    const qa = this.questions[index];
    qa.isAnswerVisible = true;
    qa.isViewed = true;
  }

  openVideo(url: string): void {
    window.open(url, '_blank');
  }
}
