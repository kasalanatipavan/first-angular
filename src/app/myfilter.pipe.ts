import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(values: any,term: any): any {
    if(term === undefined)return values;
    return values.filter(function(value){
      return value.name.includes(term);
    })

  
  }

}
