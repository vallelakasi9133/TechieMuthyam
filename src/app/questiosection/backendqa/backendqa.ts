import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-backendqa',
  standalone: true,
  // ✅ Include HttpClientModule here since it's a standalone component
  imports: [CommonModule, HttpClientModule],
  templateUrl: './backendqa.html',
  styleUrls: ['./backendqa.scss'], // ✅ fixed property name
})
export class Backendqa implements OnInit {
  questions: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions(): void {
    this.loading = true;
    this.error = '';

    this.http
      .get<{ questions: any[] }>('https://techiemuthyam.in/api/getquestion/backend')
      .pipe(
        catchError((err) => {
          this.error = 'Failed to load questions. Please try again later.';
          return of({ questions: [] });
        }),
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe((data) => {
        this.questions = (data.questions || []).map((q) => ({
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
