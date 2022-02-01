import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return '';
    }
    
    const areaCodeStr = value.slice(0,3);
    const midSectionStr = value.slice(3,6);
    const lastSectionStr = value.slice(6);

    return `(${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
  }

}
