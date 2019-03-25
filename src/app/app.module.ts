import { ClickableService } from './clickable.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickableSignedComponent } from './clickable-signed/clickable-signed.component';
import { StaticMapComponent } from './static-map/static-map.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickableSignedComponent,
    StaticMapComponent,
    InfoPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClickableService],
  bootstrap: [AppComponent],
  exports: [StaticMapComponent, InfoPanelComponent]
})
export class AppModule { }
