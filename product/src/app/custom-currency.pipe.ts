import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$', decimalPlaces: number = 2): string {
    if (!value && value !== 0) return '';
    
    return `${currencySymbol}${value.toFixed(decimalPlaces)}`;
  }
}
