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
import { BoletosListComponent } from './boletos-list.component.ts';

@Component({
    selector: 'as-test',
    template: `
    <as-boletosList text="Hello test" [(fromParent)]="testName"></as-boletosList>
    `,
    directives: [BoletosListComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture<any>;
let boletosListCompiled;
let boletosListCmp: BoletosListComponent;

describe('BoletosListComponent', () => {
    it('should print inputs correctly', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            testFixture = fixture;
            testFixture.detectChanges();

            boletosListCompiled = testFixture.nativeElement;
            boletosListCmp = testFixture.debugElement.children[0].componentInstance;

            expect(boletosListCompiled).toBeDefined();
            expect(boletosListCmp).toBeDefined();
            expect(boletosListCompiled.querySelector('h6'))
                .toHaveText('From parent');
            expect(boletosListCompiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    })));

    it('should trigger changeMe event correctly', () => {
        boletosListCmp.changeMe();
        testFixture.detectChanges();
        expect(boletosListCmp.num).toEqual(1);
        expect(boletosListCompiled.querySelector('h6'))
            .toHaveText('Changed from boletosList. Count: ' + boletosListCmp.num);
    });
});
