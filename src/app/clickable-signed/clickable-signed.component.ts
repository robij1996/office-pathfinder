import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClickableService } from '../clickable.service';

@Component({
  selector: '.app-clickable-signed',
  templateUrl: './clickable-signed.component.html',
  styleUrls: ['./clickable-signed.component.css']
})
export class ClickableSignedComponent implements OnDestroy {

  objectID = '';
  objectType = '';
  objectSub: Subscription;

  constructor(private clickableService: ClickableService) {
    this.objectSub = clickableService.getClickableID().subscribe(id => {this.objectID = id; });
    this.objectSub = clickableService.getClickableType().subscribe(type => {this.objectType = type; });
  }

  ngOnDestroy() {
    this.objectSub.unsubscribe();
  }

  onClick(event: Event) {

    if (this.objectID) {    // remove selection
      const elements = document.getElementsByClassName('selected');
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.setAttribute('class', 'st4');
      }
    }
    this.clickableService.sendClickableID(event.srcElement.id);
    this.clickableService.sendClickableType(event.srcElement.parentElement.id);
    document.getElementById(this.objectID).setAttribute('class', 'selected');
  }

}
