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
import { ImoveisListComponent } from './imoveis-list.component';

@Component({
    selector: 'as-test',
    template: `
    <as-imoveisList text="Hello test" [(fromParent)]="testName"></as-imoveisList>
    `,
    directives: [ImoveisListComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture<any>;
let imoveisListCompiled;
let imoveisListCmp: ImoveisListComponent;

describe('ImoveisListComponent', () => {
    it('should print inputs correctly', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            testFixture = fixture;
            testFixture.detectChanges();

            imoveisListCompiled = testFixture.nativeElement;
            imoveisListCmp = testFixture.debugElement.children[0].componentInstance;

            expect(imoveisListCompiled).toBeDefined();
            expect(imoveisListCmp).toBeDefined();
            expect(imoveisListCompiled.querySelector('h6'))
                .toHaveText('From parent');
            expect(imoveisListCompiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    })));

    it('should trigger changeMe event correctly', () => {
        imoveisListCmp.changeMe();
        testFixture.detectChanges();
        expect(imoveisListCmp.num).toEqual(1);
        expect(imoveisListCompiled.querySelector('h6'))
            .toHaveText('Changed from imoveisList. Count: ' + imoveisListCmp.num);
    });
});
