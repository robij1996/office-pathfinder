import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './my-route.routing';
import { AppComponent } from './app.component';
import {GetIdAndTypeService} from './my-service.service';
import { AppMapComponent } from './app-map/app-map.component';
import { ClickableCarsComponent } from './clickable-cars/clickable-cars.component';
import { ClickableTrucksComponent } from './clickable-trucks/clickable-trucks.component';
import { UserPanelComponent } from './userPanel/userPanel.component';

@NgModule({
   declarations: [
      AppComponent,
      AppMapComponent,
      ClickableCarsComponent,
      ClickableTrucksComponent,
      UserPanelComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      GetIdAndTypeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
