import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCurrencyPipe } from '../custom-currency.pipe'; // Import the custom pipe

@Component({
  selector: 'app-product-list',
  standalone: true, // This makes it a standalone component
  imports: [CommonModule, CustomCurrencyPipe], // Import the pipe here
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Smartphone', price: 799.99 },
    { name: 'Headphones', price: 199.49 },
    { name: 'Smartwatch', price: 249.99 }
  ];
}
