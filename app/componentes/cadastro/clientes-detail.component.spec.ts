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
import { ClientesDetailComponent } from './clientes-detail.component';

@Component({
    selector: 'as-test',
    template: `
    <as-clientesDetail text="Hello test" [(fromParent)]="testName"></as-clientesDetail>
    `,
    directives: [ClientesDetailComponent]
})
class TestComponent {
    testName: string;

    constructor() {
        this.testName = 'From parent';
    }
}

let testFixture: ComponentFixture<any>;
let clientesDetailCompiled;
let clientesDetailCmp: ClientesDetailComponent;

describe('ClientesDetailComponent', () => {
    it('should print inputs correctly', async(inject([TestComponentBuilder],
    (tsb: TestComponentBuilder) => {
        tsb.createAsync(TestComponent).then((fixture) => {
            testFixture = fixture;
            testFixture.detectChanges();

            clientesDetailCompiled = testFixture.nativeElement;
            clientesDetailCmp = testFixture.debugElement.children[0].componentInstance;

            expect(clientesDetailCompiled).toBeDefined();
            expect(clientesDetailCmp).toBeDefined();
            //expect(clientesDetailCompiled.querySelector('ul'))
            //    .toHaveText('From parent');
            //expect(clientesDetailCompiled.querySelector('h5'))
            //    .toHaveText('Hello test');
        });
    })));

    it('should trigger changeMe event correctly', () => {
        //clientesDetailCmp.onSelect({id: 1, nome:'Leonardo', telefones: [{tipo: 'Residencial', numero: '1654257323'},{tipo: 'Celular', numero: '16965341234'}], enderecos: [{tipo:'Residencial', tipoResidencia:'Propria', cep: '000000000', rua: 'Rua dos passarinhos', numero: '22', complemento: "", cidade: "Rio de Janeiro", estado: "RJ", pais: "Brasil"}]});
        //testFixture.detectChanges();
        //expect(clientesDetailCmp.id).toEqual(1);
        //expect(clientesDetailCmp.nome).toEqual("Leonardo");
        //expect(clientesDetailCompiled.querySelector('h6'))
        //    .toHaveText('Changed from clientesDetail. Count: ' + clientesDetailCmp.num);
    });
});
