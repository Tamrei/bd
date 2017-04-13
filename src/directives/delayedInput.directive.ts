import {Directive, EventEmitter, Output} from '@angular/core';

@Directive({
    selector:'[delayed]',
    host: {
        '(input)': 'onInput($event)'
    }
})
export class DelayedInputDirective{

    @Output() delayedInput: EventEmitter<any> = new EventEmitter();

    private imageValidationTimeout;

    constructor(){

    }

    onInput(event: any) {
        clearTimeout(this.imageValidationTimeout);

        this.imageValidationTimeout = setTimeout(() => {
            this.delayedInput.emit();
        }, 500)
    }
}