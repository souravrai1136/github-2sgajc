import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { ChildComponent } from '../components/child/child.component';
import { Child } from '../model/child.interface';

@Injectable()
export class ParentService {
  private moneySubject = new Subject<number>();

  sendMoney(child: Child, amount: number) {
    child.money += amount;
  }

  getMoney(child: Child, amount: number) {
    if (child.money >= amount) {
      child.money -= amount;
    }
  }

  getChildMoney(child: any) {
    this.moneySubject.next(child);
  }

  moneyChanges() {
    return this.moneySubject.asObservable();
  }
}
