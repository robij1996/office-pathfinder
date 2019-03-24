import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MsgSrv } from '../msg-srv.component'

@Component({
  selector: '.app-clickable',
  templateUrl: './clickable.component.html',
  styleUrls: ['./clickable.component.css']
})
export class ClickableComponent {
    _objectId = '';
    _objectType = '';
    _sub: Subscription;
    constructor(private msgSrv: MsgSrv)
    {
        this._sub = msgSrv.getObjectId().subscribe(id => {this._objectId = id;});
        this._sub = msgSrv.getObjectType().subscribe(type => {this._objectType = type;});
    }

    onClick(event: Event)
    {
        if (this._objectId)
        {
            document.getElementById(this._objectId).setAttribute('class', 'st4');
            for(let i = 0; i < document.getElementById(this._objectId).children.length; ++i)
                {
                    document.getElementById(this._objectId).children.item(i).setAttribute('class', 'st4');
                }
        }
        let name = event.srcElement.id;
        let type = event.srcElement.parentElement.id;
        this.msgSrv.sendObjectId(name);
        this.msgSrv.sendObjectType(type);
        document.getElementById(name).setAttribute('class', 'shining');
    }
}
