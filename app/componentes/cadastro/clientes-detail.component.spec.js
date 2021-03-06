"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var clientes_detail_component_1 = require('./clientes-detail.component');
var TestComponent = (function () {
    function TestComponent() {
        this.testName = 'From parent';
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'as-test',
            template: "\n    <as-clientesDetail text=\"Hello test\" [(fromParent)]=\"testName\"></as-clientesDetail>\n    ",
            directives: [clientes_detail_component_1.ClientesDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
var testFixture;
var clientesDetailCompiled;
var clientesDetailCmp;
testing_1.describe('ClientesDetailComponent', function () {
    testing_1.it('should print inputs correctly', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tsb) {
        tsb.createAsync(TestComponent).then(function (fixture) {
            testFixture = fixture;
            testFixture.detectChanges();
            clientesDetailCompiled = testFixture.nativeElement;
            clientesDetailCmp = testFixture.debugElement.children[0].componentInstance;
            testing_1.expect(clientesDetailCompiled).toBeDefined();
            testing_1.expect(clientesDetailCmp).toBeDefined();
            //expect(clientesDetailCompiled.querySelector('ul'))
            //    .toHaveText('From parent');
            //expect(clientesDetailCompiled.querySelector('h5'))
            //    .toHaveText('Hello test');
        });
    })));
    testing_1.it('should trigger changeMe event correctly', function () {
        //clientesDetailCmp.onSelect({id: 1, nome:'Leonardo', telefones: [{tipo: 'Residencial', numero: '1654257323'},{tipo: 'Celular', numero: '16965341234'}], enderecos: [{tipo:'Residencial', tipoResidencia:'Propria', cep: '000000000', rua: 'Rua dos passarinhos', numero: '22', complemento: "", cidade: "Rio de Janeiro", estado: "RJ", pais: "Brasil"}]});
        //testFixture.detectChanges();
        //expect(clientesDetailCmp.id).toEqual(1);
        //expect(clientesDetailCmp.nome).toEqual("Leonardo");
        //expect(clientesDetailCompiled.querySelector('h6'))
        //    .toHaveText('Changed from clientesDetail. Count: ' + clientesDetailCmp.num);
    });
});
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/componentes/cadastro/clientes-detail.component.spec.js.map