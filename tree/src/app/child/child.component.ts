import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  data;
  start;
  end;

  constructor() { }

  ngOnInit() {
    this.start = '00:00';
    this.end = '00:00';
  }

}
