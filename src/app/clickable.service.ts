import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickableService {
  private ClickableID = new Subject<string>();
  private ClickableType = new Subject<string>();

  sendClickableID(id: string) {
    this.ClickableID.next(id);
  }
  sendClickableType(type: string) {
    this.ClickableType.next(type);
  }
  getClickableID(): Observable<string> {
    return this.ClickableID.asObservable();
  }
  getClickableType(): Observable<string> {
    return this.ClickableType.asObservable();
  }
  removeSelection() {
    const elements = document.getElementsByClassName('selected');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.setAttribute('class', 'st4');
    }
  }

  constructor() { }
}
