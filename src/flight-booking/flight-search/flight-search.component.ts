import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from '../flight.service';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [
        { provide: FlightService, useClass: FlightService }
    ],
    styleUrls: ['./flight-search.component.css']
    // template: '<h1>...</h1>'
})
export class FlightSearchComponent {

    from: string = "Hamburg";
    to: string = "Graz";
    flights: Array<Flight> = [];
    selectedFlight: Flight;
    date: string = new Date().toISOString();


    constructor(
        private flightService: FlightService) {
        console.debug('Hello From FlightSearchComponent!');
    }

    search(): void {

        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Flight[]) => {
                    this.flights = flights;
                },
                (errResp) => {
                    console.error('Fehler beim Laden', errResp);
                }
            )
    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}