import { ClickableSignedComponent } from './../clickable-signed/clickable-signed.component';
import { ClickableService } from './../clickable.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  objectID = '';
  objectType = '';
  objectSub: Subscription;

  constructor(private clickableService: ClickableService) {
    this.objectSub = clickableService.getClickableID().subscribe(id => { this.objectID = id; });
    this.objectSub = clickableService.getClickableType().subscribe(type => { this.objectType = type; });
  }

  ngOnInit() {
  }
  searchClickable(inputText) {
    this.clickableService.removeSelection();
    const element = document.getElementById(inputText);
    if (element == null) {
      this.objectID = '';
      this.objectType = '';
    } else {
      for(let i =0; i < element.children.length; i++) {
        element.children.item(i).setAttribute('class', 'selected');
      }
    }

  }


}
