import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-company-portal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-portal.html',
  styleUrls: ['./company-portal.scss'],
})
export class CompanyPortal implements OnInit {
   constructor(private router: Router) {}
  ngOnInit(): void {
   
  }
 courses = [
    {
      title: 'Frontend Development',
      description: 'Get ready for frontend interviews by mastering HTML, CSS, JavaScript, and frameworks like React/Angular. Learn how to solve complex problems with UI/UX concepts.',
      buttonText: 'Start Preparing',
      className: 'frontend'
    },
    {
      title: 'Backend Development',
      description: 'Prepare for backend interviews by learning server-side technologies like Node.js, Express, Databases (SQL/NoSQL), and API design.',
      buttonText: 'Start Preparing',
      className: 'backend'
    },
    {
      title: 'DevOps',
      description: 'Get ready for DevOps roles by mastering cloud platforms (AWS, Azure), CI/CD pipelines, Docker, Kubernetes, and automation for scalable infrastructure.',
      buttonText: 'Start Preparing',
      className: 'devops'
    },
    {
      title: 'Data Science',
      description: 'Ace your Data Science interviews by mastering Python, statistics, machine learning algorithms, data preprocessing, and model evaluation.',
      buttonText: 'Start Preparing',
      className: 'data-science'
    }
  ];

  // Button click handler
  onButtonClick(course: any) {
    if(course === "Frontend Development"){
     this.router.navigate(['/front-end-Interview&Anwsers']);
    }
   
  }
}

