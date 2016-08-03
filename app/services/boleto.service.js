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
var Boleto = (function () {
    function Boleto(id, name) {
        this.id = id;
        this.name = name;
    }
    return Boleto;
}());
exports.Boleto = Boleto;
var boletos = [
    new Boleto(1, '00000.00000.00000.000000.00000.000000.0.51980000000000'),
    new Boleto(2, '00000.00000.00000.000000.00000.000000.0.51990000000000'),
    new Boleto(3, '00000.00000.00000.000000.00000.000000.0.52000000000000'),
    new Boleto(4, '00000.00000.00000.000000.00000.000000.0.52010000000000'),
];
var boletoPromise = Promise.resolve(boletos);
var BoletoService = (function () {
    function BoletoService() {
    }
    BoletoService.prototype.getBoletos = function () { return boletoPromise; };
    BoletoService.prototype.getBoleto = function (id) {
        return boletoPromise
            .then(function (bltos) { return bltos.filter(function (c) { return c.id === +id; })[0]; });
    };
    BoletoService.prototype.addBoleto = function (name) {
        name = name.trim();
        if (name) {
            var boleto_1 = new Boleto(BoletoService.nextBoletoId++, name);
            boletoPromise.then(function (bltos) { return bltos.push(boleto_1); });
        }
    };
    BoletoService.nextBoletoId = 100;
    BoletoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BoletoService);
    return BoletoService;
}());
exports.BoletoService = BoletoService;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/services/boleto.service.js.map