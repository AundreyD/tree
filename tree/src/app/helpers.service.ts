import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  random_num(max: number) {
    console.log('rando');
    return Math.floor((Math.random() * max) + 1);
  }
}
