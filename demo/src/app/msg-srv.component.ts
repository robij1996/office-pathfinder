import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable()
export class MsgSrv {
    private _observedObjectId = new Subject<string>();
    private _observedObjectType = new Subject<string>();

    getObjectId()
    {
        return this._observedObjectId.asObservable();
    }

    getObjectType()
    {
        return this._observedObjectType.asObservable();
    }

    sendObjectId(objectId: string)
    {
         this._observedObjectId.next(objectId);
    }

    sendObjectType(objectType: string)
    {
         this._observedObjectType.next(objectType);
    }
}
