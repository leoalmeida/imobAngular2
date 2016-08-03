import {
    it,
    inject,
    async,
    describe,
    expect
} from '@angular/core/testing';
import {
    TestComponentBuilder
} from '@angular/compiler/testing';
import { Component } from '@angular/core';
import {RelatoriosComponent} from "./relatorios.component";

@Component({
    selector: 'as-test',
    template: '<div><as-relatorios></as-relatorios></div>',
    directives: [RelatoriosComponent]
})
class TestComponent {
}

describe('RelatoriosComponent', () => {
    it('should have print "Simple" on template', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            expect(compiled.querySelector('p'))
                .toHaveText('Simple');
        });
    })));
});
