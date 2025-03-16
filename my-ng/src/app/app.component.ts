import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
// import { MyComponentComponent } from './my-component/my-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChallangeComponent } from './challange/challange.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ChallangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-ng';
}
