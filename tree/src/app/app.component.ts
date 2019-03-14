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
  roots = [];
  factories: number;

  constructor(private helpers: HelpersService) {}
  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.roots.push([]);
    }
    for (const i of this.roots) {
      const x = this.helpers.random_num(15);
      for (let y = 0; y < x; y++) {
        i.push({title: '', val: y });
      }
    }
    console.log(this.roots);
  }
}
