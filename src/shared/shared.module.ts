import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateControlComponent } from './date/date-control.component';
import { DateValueAccessor } from './date/data-value-accessor';
@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DateControlComponent,
        DateValueAccessor
    ],
    exports: [
        DateControlComponent,
        DateValueAccessor
    ]

})
export class SharedModule {

}