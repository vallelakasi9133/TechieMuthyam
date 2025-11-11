import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Company {
  name: string;
  careersLink: string;
}

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './referrals.html',
  styleUrls: ['./referrals.scss'],
})
export class Referrals implements OnInit {
  companies = signal<Company[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<{ companies: Company[] }>('https://techiemuthyam.in/api/careers').subscribe({
      next: (response) => {
        this.companies.set(response.companies || []);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load data. Please try again later.');
        this.loading.set(false);
      },
    });
  }
}
