import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app.routing';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { UsMapComponent } from './us-map.component';
import { InfoWindowComponent } from './info-window.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	HomeComponent,
  	AboutComponent,
  	UsMapComponent,
    InfoWindowComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
