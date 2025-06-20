import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  clients = [{ name: 'T-Mobile' }, { name: 'Eli Lilly' }];
  showModalExp1 = false;
  showModalExp2 = false;
}
