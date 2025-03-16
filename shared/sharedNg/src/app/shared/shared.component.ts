import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox'

@Component({
  selector: 'app-shared',
  imports: [ButtonModule, InputTextModule, FormsModule, CheckboxModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css',
})
export class SharedComponent {
  value: string = '';
  checked: string = '';
}
