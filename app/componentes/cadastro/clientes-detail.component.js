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
var router_1 = require('@angular/router');
var cliente_service_1 = require('../../services/cliente.service');
var ClientesDetailComponent = (function () {
    function ClientesDetailComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    ClientesDetailComponent.prototype.routerOnActivate = function (curr) {
        this.selectedId = +curr.getParam('id');
    };
    ClientesDetailComponent.prototype.isSelected = function (cliente) { return cliente.id === this.selectedId; };
    ClientesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getClientes().then(function (clientes) { return _this.clientes = clientes; });
    };
    ClientesDetailComponent.prototype.onSelect = function (cliente) {
        this.router.navigate(['DetalheClientes', { id: cliente.id }]);
    };
    ClientesDetailComponent = __decorate([
        core_1.Component({
            selector: 'as-clientes-list',
            template: "\n        <ul class=\"items\">\n          <li *ngFor=\"let cliente of clientes\"\n            [class.selected]=\"isSelected(cliente)\"\n            (click)=\"onSelect(cliente)\">\n            <span class=\"badge\">{{cliente.id}}</span> {{cliente.nome}}\n          </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService, router_1.Router])
    ], ClientesDetailComponent);
    return ClientesDetailComponent;
}());
exports.ClientesDetailComponent = ClientesDetailComponent;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/componentes/cadastro/clientes-detail.component.js.map