import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'as-boletos-list',
    template: `
        <h5>{{text}}</h5>
        <h6>{{fromParent}}</h6>
        <button (click)="changeMe()" class="btn btn-primary">Change</button>
    `
})
export class BoletosListComponent {
    @Input() text: string;
    @Input() fromParent: string;
    @Output() fromParentChange: EventEmitter<any>;
    num: number;

    constructor() {
        this.num = 0;
        this.fromParentChange = new EventEmitter<any>();
    }

    changeMe() {
        this.num++;
        this.fromParent = 'Changed from BoletosList. Count: ' + this.num;
        this.fromParentChange.next(this.fromParent);
    }
}
