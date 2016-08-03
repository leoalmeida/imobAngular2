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
/**
 * Created by LeonardoAlmeida on 26/04/16.
 */
var core_1 = require('@angular/core');
var Imovel = (function () {
    function Imovel(id, name) {
        this.id = id;
        this.name = name;
    }
    return Imovel;
}());
exports.Imovel = Imovel;
var imoveis = [
    new Imovel(11, 'Mr. Nice'),
    new Imovel(12, 'Narco'),
    new Imovel(13, 'Bombasto'),
    new Imovel(14, 'Celeritas'),
    new Imovel(15, 'Magneta'),
    new Imovel(16, 'RubberMan')
];
var promiseImovel = Promise.resolve(imoveis);
var ImoveisService = (function () {
    function ImoveisService() {
    }
    ImoveisService.prototype.getImoveis = function () { return promiseImovel; };
    ImoveisService.prototype.getImovel = function (id) {
        return promiseImovel
            .then(function (imvs) { return imvs.filter(function (h) { return h.id === +id; })[0]; });
    };
    ImoveisService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ImoveisService);
    return ImoveisService;
}());
exports.ImoveisService = ImoveisService;

//# sourceMappingURL=imovel.service.js.map
