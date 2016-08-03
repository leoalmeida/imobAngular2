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
import { ContratosListComponent } from './contratos-list.component';

@Component({
    selector: 'as-test',
    template: `
    <as-contratosList text="Hello test" [(fromParent)]="testName"></as-contratosList>
    `,
    directives: [ContratosListComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture<any>;
let contratosListCompiled;
let contratosListCmp: ContratosListComponent;

describe('contratosListComponent', () => {
    it('should print inputs correctly', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            testFixture = fixture;
            testFixture.detectChanges();

            contratosListCompiled = testFixture.nativeElement;
            contratosListCmp = testFixture.debugElement.children[0].componentInstance;

            expect(contratosListCompiled).toBeDefined();
            expect(contratosListCmp).toBeDefined();
            expect(contratosListCompiled.querySelector('h6'))
                .toHaveText('From parent');
            expect(contratosListCompiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    })));

    it('should trigger changeMe event correctly', () => {
        contratosListCmp.changeMe();
        testFixture.detectChanges();
        expect(contratosListCmp.num).toEqual(1);
        expect(contratosListCompiled.querySelector('h6'))
            .toHaveText('Changed from contratosList. Count: ' + contratosListCmp.num);
    });
});
