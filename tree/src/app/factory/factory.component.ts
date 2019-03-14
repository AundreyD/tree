import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  @Input()
  data;
  title;
  index;
  children;
  @Output()
  deletedFactory = new EventEmitter();
  self = [[]];

  constructor() { }

  ngOnInit() {
    console.log('data', this.data);
    this.title = this.data.title;
    this.index = this.data.index;
  }

  generate() {
    console.log('generate children');
    this.self = [[]];
    for (const i of this.self) {
      // const x = this.helpers.random_num(15);
      const x = this.children;
      for (let y = 0; y < x; y++) {
        i.push({title: '', val: y });
      }
    }
  }

  deleteMe() {
    // console.log('event val', this.index);
    this.deletedFactory.emit(this.index);
  }

}
