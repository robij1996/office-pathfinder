import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ClickableComponent } from './clickable/clickable.component';
import { MsgSrv } from './msg-srv.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ClickableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MsgSrv],
  bootstrap: [AppComponent]
})
export class AppModule { }
