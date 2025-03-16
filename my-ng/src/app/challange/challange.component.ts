import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-challange',
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './challange.component.html',
  styleUrl: './challange.component.css'
})
export class ChallangeComponent {
  isDiv1Visible = true;

  toggleDivs() {
    this.isDiv1Visible = !this.isDiv1Visible;
  }
  mortgageAmount = 0;
  mortgageTerm = 0;
  interest = 0
  submitbtn(){
    console.log(this.mortgageAmount)
    console.log(this.mortgageTerm);
    console.log(this.interest);

  }
  
}
