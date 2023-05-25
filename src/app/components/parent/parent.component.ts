import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
// import { DataService } from './data.service';
import { ParentService } from '../../services/parent.service';

import { Observable, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

interface Child {
  name: string;
  money: number;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  children: Child[] = [
    { name: 'Jack', money: 10 },
    { name: 'Jill', money: 15 }
  ];

  layout: string = 'row';

  sendMoney(child: Child) {
    child.money += 10;
  }

  getMoney(child: Child) {
    if (child.money >= 10) {
      child.money -= 10;
    }
  }

  receiveMoney(amount: number, child: Child) {
    child.money += amount;
  }

  ngOnInit() {
    interval(60000).pipe(
      mergeMap(() => this.children)
    ).subscribe(child => this.sendMoney(child));
  }
}
