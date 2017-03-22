
import { Component, Input, EventEmitter, Output, NgZone, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Flight } from '../../entities/flight';

// a Comment
@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

    constructor(private zone: NgZone, private element: ElementRef) {
    }

    check() {
        this.blink();
        return null;
    }

    blink() {
        // Vorsicht: Direkter DOM-Zugriff !!!
        // Dont try this at home

        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        //              ^
        //              +--- DOM
        this.zone.runOutsideAngular(() => {
            setTimeout(() => {
                this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
            }, 1000);
        });
    }

}