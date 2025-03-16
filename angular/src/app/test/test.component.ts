import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule,NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  user = {
    name: '',
    phones: [''],
  };

  addPhone() {
    this.user.phones.push('');
  }

  removePhone(index: number) {
    this.user.phones.splice(index, 1);
  }

  onSubmit(form: any) {
    console.log('Form Submitted:', form.value);
  }
}
