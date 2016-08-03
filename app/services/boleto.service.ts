/**
 * Created by LeonardoAlmeida on 26/04/16.
 */

import {Injectable} from '@angular/core';

export class Boleto {
    constructor(public id: number, public name: string) { }
}

let boletos = [
    new Boleto(1, '00000.00000.00000.000000.00000.000000.0.51980000000000'),
    new Boleto(2, '00000.00000.00000.000000.00000.000000.0.51990000000000'),
    new Boleto(3, '00000.00000.00000.000000.00000.000000.0.52000000000000'),
    new Boleto(4, '00000.00000.00000.000000.00000.000000.0.52010000000000'),
];

let boletoPromise = Promise.resolve(boletos);

@Injectable()
export class BoletoService {
    static nextBoletoId = 100;

    getBoletos() { return boletoPromise; }

    getBoleto(id: number | string) {
        return boletoPromise
            .then(bltos => bltos.filter(c => c.id === +id)[0]);
    }

    addBoleto(name: string) {
        name = name.trim();
        if (name) {
            let boleto = new Boleto(BoletoService.nextBoletoId++, name);
            boletoPromise.then(bltos => bltos.push(boleto));
        }
    }
}
