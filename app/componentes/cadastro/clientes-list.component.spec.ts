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
import { ClientesListComponent } from './clientes-list.component.ts';

@Component({
    selector: 'as-test',
    template: `
    <as-clientesList text="Hello test" [(fromParent)]="testName"></as-clientesList>
    `,
    directives: [ClientesListComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture<any>;
let clientesListCompiled;
let clientesListCmp: ClientesListComponent;

describe('ClientesListComponent', () => {
    it('should print inputs correctly', async(inject([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
            tsb.createAsync(TestComponent).then((fixture) => {
                testFixture = fixture;
                testFixture.detectChanges();

                clientesListCompiled = testFixture.nativeElement;
                clientesListCmp = testFixture.debugElement.children[0].componentInstance;

                expect(clientesListCompiled).toBeDefined();
                expect(clientesListCmp).toBeDefined();
                //expect(clientesListCompiled.querySelector('ul'))
                //    .toHaveText('From parent');
                //expect(clientesListCompiled.querySelector('h5'))
                //    .toHaveText('Hello test');
            });
        })));

    it('should trigger changeMe event correctly', () => {
        //clientesListCmp.onSelect({id: 1, nome:'Leonardo', telefones: [{tipo: 'Residencial', numero: '1654257323'},{tipo: 'Celular', numero: '16965341234'}], enderecos: [{tipo:'Residencial', tipoResidencia:'Propria', cep: '000000000', rua: 'Rua dos passarinhos', numero: '22', complemento: "", cidade: "Rio de Janeiro", estado: "RJ", pais: "Brasil"}]});
        //testFixture.detectChanges();
        //expect(clientesListCmp.id).toEqual(1);
        //expect(clientesListCompiled.querySelector('h6'))
        //    .toHaveText('Changed from clientesList. Count: ' + clientesListCmp.num);
    });
});
