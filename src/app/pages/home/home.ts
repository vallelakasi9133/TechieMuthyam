import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  companies = signal<any[]>([]);  // Signal for storing company data
  loading = signal<boolean>(true);  // Signal for loading state
  error = signal<string | null>(null);  // Signal for error state

  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http.get<any>('https://techiemuthyam.in/api/getdata').subscribe({
      next: (response) => {
        this.companies.set(response.companies || []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load data. Please try again later.');
        this.loading.set(false);
      },
    });
  }

}
