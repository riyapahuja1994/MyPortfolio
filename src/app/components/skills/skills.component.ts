import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    {
      title: 'Languages',
      items: [
        { name: 'JavaScript', value: 'javascript' },
        { name: 'TypeScript', value: 'typescript' },
        { name: 'Python', value: 'python' },
        { name: 'Java', value: 'java' },
      ],
      rating: 8,
    },
    {
      title: 'Web Technologies',
      items: [
        { name: 'HTML5', value: 'html' },
        { name: 'CSS3', value: 'css' },
        { name: 'Angular 2+', value: 'angular' },
        { name: 'React', value: 'react' },
        { name: 'Node.js', value: 'node' },
        { name: 'Next.js', value: 'next' },
        { name: 'CSS Flexbox', value: 'css-flexbox' },
        { name: 'CSS Grid', value: 'css-grid' },
      ],
      rating: 8,
    },
    {
      title: 'Databases & Cloud Technologies',
      items: [
        { name: 'MySQL', value: 'mysql' },
        { name: 'MongoDB', value: 'mongodb' },
        { name: 'PostgreSQL', value: 'postgresql' },
        { name: 'AWS', value: 'aws' },
        { name: 'Firebase', value: 'firebase' },
        { name: 'Heroku', value: 'heroku' },
        { name: 'Mongo Atlas', value: 'mongo-atlas' },
      ],
      rating: 7,
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'D3.js', value: 'd3' },
        { name: 'Highcharts.js', value: 'highcharts' },
        { name: 'Express.js', value: 'express' },
        { name: 'Bootstrap', value: 'bootstrap' },
        { name: 'Tailwind CSS', value: 'tailwind' },
        { name: 'Material UI', value: 'material-ui' },
      ],
      rating: 8,
    },
    {
      title: 'Testing Frameworks & APIs',
      items: [
        { name: 'Jest', value: 'jest' },
        { name: 'Jasmine', value: 'jasmine' },
        { name: 'Karma', value: 'karma' },
        { name: 'Cypress', value: 'cypress' },
        { name: 'REST API', value: 'rest-api' },
        { name: 'GraphQL', value: 'graphql' },
      ],
      rating: 7,
    },
    {
      title: 'Tools & Platforms',
      items: [
        { name: 'Git', value: 'git' },
        { name: 'Docker', value: 'docker' },
        { name: 'Jenkins', value: 'jenkins' },
        { name: 'GitHub', value: 'github' },
        { name: 'GitLab', value: 'gitlab' },
        { name: 'Bitbucket', value: 'bitbucket' },
        { name: 'Postman', value: 'postman' },
        { name: 'Webpack', value: 'webpack' },
        { name: 'Vite', value: 'vite' },
        { name: 'Jira', value: 'jira' },
      ],
      rating: 7,
    },
  ];
}
