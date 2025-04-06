import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: String = 'Angular TUtorial';
  angularVersion = 'Version 18';
  version: Number = 18;
  isActive: boolean = false;
  currentDate = new Date();
}
