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
var Evento = (function () {
    function Evento(id, name) {
        this.id = id;
        this.name = name;
    }
    return Evento;
}());
exports.Evento = Evento;
var eventos = [
    new Evento(1, 'Dragon Burning Cities'),
    new Evento(2, 'Sky Rains Great White Sharks'),
    new Evento(3, 'Giant Asteroid Heading For Earth'),
    new Evento(4, 'Procrastinators Meeting Delayed Again'),
];
var eventosPromise = Promise.resolve(eventos);
var EventosService = (function () {
    function EventosService() {
    }
    EventosService.prototype.getEventos = function () { return eventosPromise; };
    EventosService.prototype.getEvento = function (id) {
        return eventosPromise
            .then(function (events) { return events.filter(function (c) { return c.id === +id; })[0]; });
    };
    EventosService.prototype.addEvento = function (name) {
        name = name.trim();
        if (name) {
            var evento_1 = new Evento(EventosService.nextEventoId++, name);
            eventosPromise.then(function (events) { return events.push(evento_1); });
        }
    };
    EventosService.nextEventoId = 100;
    EventosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventosService);
    return EventosService;
}());
exports.EventosService = EventosService;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/services/evento.service.js.map