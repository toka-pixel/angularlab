// import {  Pipe, Component } from '@angular/core';


// @Component({
//   selector: 'app-hero-birthday',
//   template: `<p>The hero's birthday is {{ birthday | date }}</p>`
// })
// export class HeroBirthdayComponent {
//   today = new Date(); 
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}