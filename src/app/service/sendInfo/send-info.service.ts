import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendInfoService {
  constructor() {}

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  private userLoginSubject = new BehaviorSubject<any>(null);
  userLogin$ = this.userLoginSubject.asObservable();

  private sendDataSubject = new BehaviorSubject<any>(undefined);
  sendData$ = this.sendDataSubject.asObservable();

  setData(value: any) {
    this.dataSubject.next(value);
  }

  updateLogin(value: any) {
    this.userLoginSubject.next(value);
  }

  sendDataInfo(value: any) {
    this.sendDataSubject.next(value);
  }
}
