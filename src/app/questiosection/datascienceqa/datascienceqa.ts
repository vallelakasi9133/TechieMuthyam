import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-datascienceqa',
  standalone: true,
  // ✅ Include HttpClientModule because this is a standalone component
  imports: [CommonModule, HttpClientModule],
  templateUrl: './datascienceqa.html',
  styleUrls: ['./datascienceqa.scss'], // ✅ fixed typo (should be plural)
})
export class Datascienceqa implements OnInit {
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
      .get<{ questions: any[] }>('https://techiemuthyam.in/api/getquestion/datascience')
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
