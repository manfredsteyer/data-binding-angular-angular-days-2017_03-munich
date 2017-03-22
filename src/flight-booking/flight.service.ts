import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Flight } from '../entities/flight';
import { Headers, URLSearchParams, Http } from '@angular/http';
import { BASE_URL } from '../app.tokens';

@Injectable()
export class FlightService {

    public flights: Flight[] = [];
    private flightsSubject = new BehaviorSubject<Flight[]>([]);
    public flights$: Observable<Flight[]>;

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string
    ) {
        this.flights$ = this.flightsSubject;
    }

    find(from: string, to: string): void {

        let url = this.baseUrl + '/flight';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        this
            .http
            .get(url, { headers, search})
            .map(resp => resp.json())
            .subscribe(flights => {
                this.flights = flights;
                this.flightsSubject.next(this.flights);
            },
            err => {
                console.error('Fehler', err);
            });
    }

    delay() {
        let date = new Date(this.flights[0].date);

        let newDate = new Date(date.getTime() + 1000 * 60 * 15 );

        /*
        let flight: Flight = {
            ...this.flights[0],
            date: newDate.toISOString()
        }
        */

        let newFlight: Flight = Object.assign(
                                {},
                                this.flights[0],
                                { date: newDate.toISOString()});

        let newFlights: Flight[] = [
            newFlight,
            ...this.flights.slice(1)
        ];

        this.flights = newFlights;
        this.flightsSubject.next(this.flights);

        // date.setTime(date.getTime() + 1000 * 60 * 15);
        // this.flights[0].date = date.toISOString();
    }
}