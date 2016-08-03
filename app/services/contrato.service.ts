/**
 * Created by LeonardoAlmeida on 26/04/16.
 */

import {Injectable} from '@angular/core';

export class Contrato {
    constructor(public id: number, public name: string) { }
}

let contratos = [
    new Contrato(1, 'ABP JJ015'),
    new Contrato(2, 'ABP JJ018'),
    new Contrato(3, 'ABP MN038'),
    new Contrato(4, 'ABP MN039'),
];

let contratosPromise = Promise.resolve(contratos);

@Injectable()
export class ContratosService {
    static nextContratoId = 100;

    getContratos() { return contratosPromise; }

    getContrato(id: number | string) {
        return contratosPromise
            .then(ctts => ctts.filter(c => c.id === +id)[0]);
    }

    addCrisis(name: string) {
        name = name.trim();
        if (name) {
            let contrato = new Contrato(ContratosService.nextContratoId++, name);
            contratosPromise.then(ctts => ctts.push(contrato));
        }
    }
}
