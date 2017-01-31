import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app.routing';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { UsMapComponent } from './us-map.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	HomeComponent,
  	AboutComponent,
  	UsMapComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
