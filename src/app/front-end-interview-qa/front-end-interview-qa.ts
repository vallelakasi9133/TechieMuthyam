import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-front-end-interview-qa',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './front-end-interview-qa.html',
  styleUrls: ['./front-end-interview-qa.scss'],
})
export class FrontEndInterviewQA implements OnInit {
  questions: any[] = [];
  loading: boolean = false;
  
  error: string = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions(): void {
    this.loading = true;
    this.error = '';

    this.http
      .get<{ questions: any[] }>('https://techiemuthyam.in/api/getquestion')
      .pipe(
        catchError((err) => {
          // console.error('API error', err);
          this.error = 'Failed to load questions. Please try again later.';
          return of({ questions: [] });
        }),
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe((data) => {
        this.questions = data.questions.map((q) => ({
          ...q,
          isAnswerVisible: false,
          isViewed: false,
        }));
      });
  }

  showAnswer(index: number): void {
    const qa = this.questions[index];
    qa.isAnswerVisible = true;
    qa.isViewed = true;
  }

  openVideo(url: string): void {
    window.open(url, '_blank');
  }
}
