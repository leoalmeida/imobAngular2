/**
 * Created by LeonardoAlmeida on 26/04/16.
 */
import {Injectable} from '@angular/core';

export class Imovel {
    constructor(public id: number, public name: string) { }
}

let imoveis = [
    new Imovel(11, 'Mr. Nice'),
    new Imovel(12, 'Narco'),
    new Imovel(13, 'Bombasto'),
    new Imovel(14, 'Celeritas'),
    new Imovel(15, 'Magneta'),
    new Imovel(16, 'RubberMan')
];

let promiseImovel = Promise.resolve(imoveis);

@Injectable()
export class ImoveisService {
    getImoveis() { return promiseImovel; }

    getImovel(id: number | string) {
        return promiseImovel
            .then(imvs => imvs.filter(h => h.id === +id)[0]);
    }
}
