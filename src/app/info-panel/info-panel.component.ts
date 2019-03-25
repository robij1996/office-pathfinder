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

}
