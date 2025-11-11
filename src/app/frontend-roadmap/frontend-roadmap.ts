import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend-roadmap',
  imports: [CommonModule],
  templateUrl: './frontend-roadmap.html',
  styleUrl: './frontend-roadmap.scss',
})
export class FrontendRoadmap {
  constructor(private router: Router) {}
   stages = [
    {
      name: 'HTML & CSS',
      description: 'Learn to structure and style web pages using HTML5 and CSS3.',
      time: '2 - 3 weeks',
      icon: 'assets/icons/html-css.svg'
    },
    {
      name: 'JavaScript Fundamentals',
      description: 'Understand programming basics, DOM manipulation, and ES6+ features.',
      time: '3 - 4 weeks',
      icon: 'assets/icons/javascript.svg'
    },
    {
      name: 'Version Control (Git & GitHub)',
      description: 'Learn to track code changes and collaborate using Git and GitHub.',
      time: '1 week',
      icon: 'assets/icons/git.svg'
    },
    {
      name: 'Frontend Framework (React, Angular, Vue)',
      description: 'Master one popular frontend framework for building dynamic apps.',
      time: '4 - 6 weeks',
      icon: 'assets/icons/framework.svg'
    },
    {
      name: 'Testing & Debugging',
      description: 'Learn unit testing, debugging tools, and best practices.',
      time: '2 weeks',
      icon: 'assets/icons/testing.svg'
    },
    {
      name: 'Deployment & Optimization',
      description: 'Understand CI/CD pipelines, hosting, and app performance optimization.',
      time: '1 - 2 weeks',
      icon: 'assets/icons/deployment.svg'
    }
  ];

navigateToInterviewPrePage(){
   this.router.navigate(['/company-portal']);
}
}
