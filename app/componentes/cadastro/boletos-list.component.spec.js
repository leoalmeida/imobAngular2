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
var boletos_list_component_ts_1 = require('./boletos-list.component.ts');
var TestComponent = (function () {
    function TestComponent() {
        this.testName = 'From parent';
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'as-test',
            template: "\n    <as-boletosList text=\"Hello test\" [(fromParent)]=\"testName\"></as-boletosList>\n    ",
            directives: [boletos_list_component_ts_1.BoletosListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
var testFixture;
var boletosListCompiled;
var boletosListCmp;
testing_1.describe('BoletosListComponent', function () {
    testing_1.it('should print inputs correctly', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tsb) {
        tsb.createAsync(TestComponent).then(function (fixture) {
            testFixture = fixture;
            testFixture.detectChanges();
            boletosListCompiled = testFixture.nativeElement;
            boletosListCmp = testFixture.debugElement.children[0].componentInstance;
            testing_1.expect(boletosListCompiled).toBeDefined();
            testing_1.expect(boletosListCmp).toBeDefined();
            testing_1.expect(boletosListCompiled.querySelector('h6'))
                .toHaveText('From parent');
            testing_1.expect(boletosListCompiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    })));
    testing_1.it('should trigger changeMe event correctly', function () {
        boletosListCmp.changeMe();
        testFixture.detectChanges();
        testing_1.expect(boletosListCmp.num).toEqual(1);
        testing_1.expect(boletosListCompiled.querySelector('h6'))
            .toHaveText('Changed from boletosList. Count: ' + boletosListCmp.num);
    });
});
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/componentes/cadastro/boletos-list.component.spec.js.map