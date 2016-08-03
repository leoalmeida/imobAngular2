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
var core_1 = require('@angular/core');
var EventosListComponent = (function () {
    function EventosListComponent() {
        this.num = 0;
        this.fromParentChange = new core_1.EventEmitter();
    }
    EventosListComponent.prototype.changeMe = function () {
        this.num++;
        this.fromParent = 'Changed from eventosList. Count: ' + this.num;
        this.fromParentChange.next(this.fromParent);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EventosListComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EventosListComponent.prototype, "fromParent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EventosListComponent.prototype, "fromParentChange", void 0);
    EventosListComponent = __decorate([
        core_1.Component({
            selector: 'as-eventos-list',
            template: "\n        <h5>{{text}}</h5>\n        <h6>{{fromParent}}</h6>\n        <button (click)=\"changeMe()\" class=\"btn btn-primary\">Change</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EventosListComponent);
    return EventosListComponent;
}());
exports.EventosListComponent = EventosListComponent;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/componentes/cadastro/eventos-list.component.js.map