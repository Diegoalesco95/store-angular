import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@core/models/product.model';

@Pipe({
  name: 'groupProducts',
})
export class GroupProductsPipe implements PipeTransform {
  transform(value: Product[]): any {
    const groupedProducts: any[] = [];
    value.forEach((product) => {
      const quantity = value.reduce(
        (acum, elem) => (product.id === elem.id ? acum + 1 : acum),
        0
      );
      if (!groupedProducts.some((p) => p.id === product.id)) {
        groupedProducts.push({
          ...product,
          quantity,
          amount: quantity * product.price,
        });
      }
    });
    return groupedProducts;
  }
}
