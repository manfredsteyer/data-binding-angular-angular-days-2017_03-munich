import { Component } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from '../flight.service';
import { Observable } from 'rxjs';

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

    selectedFlight: Flight;
    date: string = new Date().toISOString();

    get flights(): Array<Flight> {
        return this.flightService.flights;
    }

    get flights$(): Observable<Flight[]> {
        return this.flightService.flights$;
    }

    basket = {
        "3": true,
        "4": false,
        "5": true
    };

    constructor(
        private flightService: FlightService) {
        console.debug('Hello From FlightSearchComponent!');
    }

    delay() {
        this.flightService.delay();
    }

    search(): void {

        this.flightService
            .find(this.from, this.to);

    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}