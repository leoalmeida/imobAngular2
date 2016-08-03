import {
    it,
    inject,
    async,
    describe,
    expect
} from '@angular/core/testing';
import {
    TestComponentBuilder,
    ComponentFixture
} from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { EventosListComponent } from './eventos-list.component';

@Component({
    selector: 'as-test',
    template: `
    <as-eventosList text="Hello test" [(fromParent)]="testName"></as-eventosList>
    `,
    directives: [EventosListComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture<any>;
let eventosListCompiled;
let eventosListCmp: EventosListComponent;

describe('EventosListComponent', () => {
    it('should print inputs correctly', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            testFixture = fixture;
            testFixture.detectChanges();

            eventosListCompiled = testFixture.nativeElement;
            eventosListCmp = testFixture.debugElement.children[0].componentInstance;

            expect(eventosListCompiled).toBeDefined();
            expect(eventosListCmp).toBeDefined();
            expect(eventosListCompiled.querySelector('h6'))
                .toHaveText('From parent');
            expect(eventosListCompiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    })));

    it('should trigger changeMe event correctly', () => {
        eventosListCmp.changeMe();
        testFixture.detectChanges();
        expect(eventosListCmp.num).toEqual(1);
        expect(eventosListCompiled.querySelector('h6'))
            .toHaveText('Changed from eventosList. Count: ' + eventosListCmp.num);
    });
});
