import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
 ngOnInit(): void {
    // Type assertion: tell TypeScript these are PerformanceNavigationTiming entries
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];

    if (navEntries.length > 0 && navEntries[0].type === 'reload') {
      this.router.navigateByUrl('/');
    }
  }


}

// 👇 This is what Angular SSR expects
export const App = AppComponent;
