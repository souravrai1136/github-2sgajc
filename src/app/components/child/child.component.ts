import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentService } from '../../services/parent.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() name: string | any;
  @Input() money: number | any;

  @Output() moneyChange: EventEmitter<number> = new EventEmitter<number>();

  getMoney() {
    this.moneyChange.emit(5);
  }
}
