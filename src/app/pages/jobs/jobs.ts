import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface JobRoadmap {
  title: string;
  icon: string;
  description: string;
  skills: string[];
  level: string;
}

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.html',
  styleUrls: ['./jobs.scss']
})
export class Jobs implements OnInit {
  constructor(private router: Router) {}
  jobRoadmaps: JobRoadmap[] = [];

  ngOnInit(): void {
    // ✅ Dummy job roadmap content
    this.jobRoadmaps = [
      {
        title: 'Frontend Developer',
        icon: '💻',
        level: 'Beginner to Advanced',
        description:
          'Build beautiful and responsive user interfaces with modern frontend tools.',
        skills: [
          'HTML, CSS, JavaScript',
          'Angular / React / Vue',
          'Responsive Design',
          'Version Control (Git)',
          'Testing (Jest / Cypress)'
        ]
      },
      {
        title: 'Backend Developer',
        icon: '⚙️',
        level: 'Intermediate to Advanced',
        description:
          'Create robust and scalable server-side applications and APIs.',
        skills: [
          'Node.js / Python / Java',
          'Databases (SQL & NoSQL)',
          'REST & GraphQL APIs',
          'Authentication & Authorization',
          'Deployment (AWS, Docker)'
        ]
      },
      {
        title: 'Full Stack Engineer',
        icon: '🧩',
        level: 'Advanced',
        description:
          'Combine frontend and backend skills to deliver complete web applications.',
        skills: [
          'Frontend + Backend Integration',
          'API Development',
          'Database Design',
          'CI/CD & Cloud Deployment',
          'App Performance Optimization'
        ]
      },
      {
        title: 'Data Scientist',
        icon: '📊',
        level: 'Intermediate to Advanced',
        description:
          'Analyze data and build machine learning models for predictions and insights.',
        skills: [
          'Python, Pandas, Numpy',
          'Machine Learning Basics',
          'Data Visualization (Matplotlib, Seaborn)',
          'Deep Learning & AI Concepts',
          'Model Deployment'
        ]
      },
      {
        title: 'DevOps Engineer',
        icon: '☁️',
        level: 'Intermediate',
        description:
          'Automate deployment and manage scalable cloud infrastructure.',
        skills: [
          'Linux & Shell Scripting',
          'Docker & Kubernetes',
          'CI/CD Pipelines',
          'Cloud Platforms (AWS / GCP / Azure)',
          'Monitoring & Logging'
        ]
      }
    ];
  }




  exploreMore(title: string){
    console.log(title);
    if (title === "Frontend Developer"){
      this.router.navigate(['/front-endroadmap']);
    }


  }
}
