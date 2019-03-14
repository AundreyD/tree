import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HelpersService } from './helpers.service';
import { FactoryComponent } from './factory/factory.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tree';
  roots = [[]];
  factories = 0;
  children: number;

  constructor(private helpers: HelpersService) {}
  ngOnInit() {
  }

  generate() {
    console.log('generate factories');
    this.roots = [[]];
    for (const i of this.roots) {
      // const x = this.helpers.random_num(15);
        for (let y = 0; y <= this.factories - 1; y++) {
        i.push({title: '', index: y });
        }
    }
  }

  removeFactory(index) {
    console.log('removing', this.roots[0]);
    if (this.factories !== 0) {
      this.factories --;
    }
    this.roots[0].splice(index, 1);
    for (const i of this.roots) {
      // const x = this.helpers.random_num(15);
      if (this.factories > 1) {
        for (let y = 0; y <= this.factories - 1; y++) {
        i.push({title: '', index: y });
        }
      }
    }
  }

  renderTree() {
    for (const i of this.roots) {
      // const x = this.helpers.random_num(15);
      if (this.factories > 1) {
        for (let y = 0; y <= this.factories - 1; y++) {
        i.push({title: '', index: y });
        }
      }
    }
  }
}
