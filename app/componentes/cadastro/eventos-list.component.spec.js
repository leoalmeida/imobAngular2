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
var eventos_list_component_1 = require('./eventos-list.component');
var TestComponent = (function () {
    function TestComponent() {
        this.testName = 'From parent';
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'as-test',
            template: "\n    <as-eventosList text=\"Hello test\" [(fromParent)]=\"testName\"></as-eventosList>\n    ",
            directives: [eventos_list_component_1.EventosListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
var testFixture;
var eventosListCompiled;
var eventosListCmp;
testing_1.describe('EventosListComponent', function () {
    testing_1.it('should print inputs correctly', testing_1.async(testing_1.inject([testing_2.TestComponentBuilder], function (tsb) {
        tsb.createAsync(TestComponent).then(function (fixture) {
            testFixture = fixture;
            testFixture.detectChanges();
            eventosListCompiled = testFixture.nativeElement;
            eventosListCmp = testFixture.debugElement.children[0].componentInstance;
            testing_1.expect(eventosListCompiled).toBeDefined();
            testing_1.expect(eventosListCmp).toBeDefined();
            testing_1.expect(eventosListCompiled.querySelector('h6'))
                .toHaveText('From parent');
            testing_1.expect(eventosListCompiled.querySelector('h5'))
                .toHaveText('Hello test');
        });
    })));
    testing_1.it('should trigger changeMe event correctly', function () {
        eventosListCmp.changeMe();
        testFixture.detectChanges();
        testing_1.expect(eventosListCmp.num).toEqual(1);
        testing_1.expect(eventosListCompiled.querySelector('h6'))
            .toHaveText('Changed from eventosList. Count: ' + eventosListCmp.num);
    });
});
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/componentes/cadastro/eventos-list.component.spec.js.map