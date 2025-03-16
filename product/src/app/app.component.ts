import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'; // Import component

@Component({
  selector: 'app-root',
  standalone: true, // Make it standalone
  imports: [ProductListComponent], // Import ProductListComponent
  template: `<app-product-list></app-product-list>`, // Use the component
})
export class AppComponent {}
