/**
 * Created by LeonardoAlmeida on 26/04/16.
 */
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
var Contrato = (function () {
    function Contrato(id, name) {
        this.id = id;
        this.name = name;
    }
    return Contrato;
}());
exports.Contrato = Contrato;
var contratos = [
    new Contrato(1, 'ABP JJ015'),
    new Contrato(2, 'ABP JJ018'),
    new Contrato(3, 'ABP MN038'),
    new Contrato(4, 'ABP MN039'),
];
var contratosPromise = Promise.resolve(contratos);
var ContratosService = (function () {
    function ContratosService() {
    }
    ContratosService.prototype.getContratos = function () { return contratosPromise; };
    ContratosService.prototype.getContrato = function (id) {
        return contratosPromise
            .then(function (ctts) { return ctts.filter(function (c) { return c.id === +id; })[0]; });
    };
    ContratosService.prototype.addCrisis = function (name) {
        name = name.trim();
        if (name) {
            var contrato_1 = new Contrato(ContratosService.nextContratoId++, name);
            contratosPromise.then(function (ctts) { return ctts.push(contrato_1); });
        }
    };
    ContratosService.nextContratoId = 100;
    ContratosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContratosService);
    return ContratosService;
}());
exports.ContratosService = ContratosService;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/services/contrato.service.js.map