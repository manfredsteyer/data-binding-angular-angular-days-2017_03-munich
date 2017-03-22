import { Directive, Renderer, ElementRef, Self, forwardRef, HostListener } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[date]', // <input date>
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateValueAccessor),
        multi: true}]
})
export class DateValueAccessor implements ControlValueAccessor {

    onChange = (_: any) => {};
    onTouched = () => {};

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {
    }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    @HostListener('blur')
    blur() {
        this.onTouched();
    }

    // Parser: View --> Ctrl
    @HostListener('input', ['$event.target.value'])
    input(value) {

        // Write back to model
        if (value) {
            value = value.split(/\./);
            value = value[2] + "-" + value[1] + "-" + value[0];
        }

        this.onChange(value);
    }

    // Formatter: Ctrl --> View
    writeValue(value: any): void {

        // Write to view
        if (value) {
            var date = new Date(value);

            value =
                date.getDate() + "."
                + (date.getMonth()+1) + "."
                + date.getFullYear();
        }

        var normalizedValue = (value) ? value : '';
        this._renderer.setElementProperty(
            this._elementRef.nativeElement,
            'value',
            normalizedValue);

    }

}