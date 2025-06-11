import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  links = [
    { path: 'about', label: 'About' },
    { path: 'experience', label: 'Experience' },
    { path: 'projects', label: 'Projects' },
    { path: 'skills', label: 'Skills' },
  ];
}
