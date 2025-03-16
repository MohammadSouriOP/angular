import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  mortgageForm: FormGroup;
  result: { monthly: number; total: number } | null = null;

  constructor(private fb: FormBuilder) {
    this.mortgageForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      term: ['', [Validators.required, Validators.min(1)]],
      rate: ['', [Validators.required, Validators.min(0.01)]],
      type: ['', Validators.required]
    });
  }

  get amount() { return this.mortgageForm.get('amount'); }
  get term() { return this.mortgageForm.get('term'); }
  get rate() { return this.mortgageForm.get('rate'); }
  get type() { return this.mortgageForm.get('type'); }

  onSubmit() {
    if (this.mortgageForm.invalid) return;

    const { amount, term, rate, type } = this.mortgageForm.value;
    this.result = this.calculateMortgage(parseFloat(amount), parseFloat(rate), parseInt(term), type);
  }

  calculateMortgage(amount: number, rate: number, term: number, type: string) {
    let monthlyPayment: number;
    const monthlyRate = rate / 12 / 100;
    const numberOfPayments = term * 12;

    if (type === 'repayment') {
      monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    } else {
      monthlyPayment = (amount * rate) / 100 / 12;
    }

    return {
      monthly: monthlyPayment,
      total: monthlyPayment * numberOfPayments
    };
  }

  clearForm() {
    this.mortgageForm.reset();
    this.result = null;
  }
}
