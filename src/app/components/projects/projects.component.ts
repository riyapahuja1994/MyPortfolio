import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Ecommerce App Frontend',
      description: 'An ecommerce app built with Angular and Node.js',
      imageUrl: 'shop.png',
      link: 'https://github.com/riyapahuja1994/',
    },
    {
      name: 'Ecommerce App Backend',
      description: 'An ecommerce app built with Angular and Node.js',
      imageUrl: 'e-com.png',
      link: 'https://github.com/riyapahuja1994/',
    },
    {
      name: 'SVG Animation Library',
      description:
        'An Innovatiove SVG Animation Module built with multiple CSS keyframes animations',
      imageUrl: 'e-com.png',
      link: 'https://github.com/riyapahuja1994/',
    },
  ];
}
