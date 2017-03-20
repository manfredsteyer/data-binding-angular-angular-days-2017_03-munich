import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from '../flight-booking/flight-search/flight-search.component';
import { FlightService } from '../flight-booking/flight.service';

import { BASE_URL } from '../app.tokens'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent
  ],
  providers: [
    {provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [        
     AppComponent 
  ]
})
export class AppModule {
}

