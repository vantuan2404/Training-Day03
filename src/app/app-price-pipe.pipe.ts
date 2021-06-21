import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPricePipe'
})
export class AppPricePipePipe implements PipeTransform {

  transform(foods:any):any[] {
    return foods.filter((x)=>x.price > 8 && x.id !== 1);
  }

}
