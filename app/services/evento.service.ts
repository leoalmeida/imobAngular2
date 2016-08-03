/**
 * Created by LeonardoAlmeida on 26/04/16.
 */

import {Injectable} from '@angular/core';

export class Evento {
    constructor(public id: number, public name: string) { }
}

let eventos = [
    new Evento(1, 'Dragon Burning Cities'),
    new Evento(2, 'Sky Rains Great White Sharks'),
    new Evento(3, 'Giant Asteroid Heading For Earth'),
    new Evento(4, 'Procrastinators Meeting Delayed Again'),
];

let eventosPromise = Promise.resolve(eventos);

@Injectable()
export class EventosService {
    static nextEventoId = 100;

    getEventos() { return eventosPromise; }

    getEvento(id: number | string) {
        return eventosPromise
            .then(events => events.filter(c => c.id === +id)[0]);
    }

    addEvento(name: string) {
        name = name.trim();
        if (name) {
            let evento = new Evento(EventosService.nextEventoId++, name);
            eventosPromise.then(events => events.push(evento));
        }
    }
}
