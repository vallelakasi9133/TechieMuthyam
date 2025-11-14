import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-devopsqa',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './devopsqa.html',
  styleUrl: './devopsqa.scss',
})
export class Devopsqa implements OnInit{
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
      .get<{ questions: any[] }>('https://techiemuthyam.in/api/getquestion/devops')
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
