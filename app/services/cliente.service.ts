/**
 * Created by LeonardoAlmeida on 26/04/16.
 */

import {Injectable} from '@angular/core';
import { uuid } from '../componentes/utils/uuid';

export class Cliente {
    id: number;
    nome: string;
    telefones: Telefone[];
    enderecos: Endereco[];

    constructor(obj?: any) {
        this.id              = obj && obj.id              || uuid();
        this.nome            = obj && obj.nome            || 'nome';
        this.telefones       = obj && obj.telefones       || Telefone.newTelefoneList();
        this.enderecos       = obj && obj.enderecos       || Endereco.newEnderecoList();
    }
}

export class Telefone {
    public static tipoTelefone = ['Residencial', 'Celular', 'Comercial'];

    id: string;
    tipo: string;
    numero: number;

    static newTelefoneList() {
        let array: Telefone[] = new Array();
        for (let index = 0; index < Telefone.tipoTelefone.length; index++) {
            array.push(new Telefone({
                id: index,
                tipo: Telefone.tipoTelefone[index],
                numero: 0})
            );
        };
        return array;
    }

    constructor(obj?: any) {
        this.id              = obj && obj.id         || uuid();
        this.tipo            = obj && obj.tipo       || 'Residencial';
        this.numero          = obj && obj.numero     || 0;
    }

}

export class Endereco {
    public static tipoEndereco = ['Residencial', 'Corporativo'];
    public static tipoResidencia = ['Propria', 'Alugada', 'Temporada', 'Familiar'];

    id: string;
    tpEnd: string;
    tpRes: string;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    cidade: string;
    estado: string;
    pais: string;

    static newEnderecoList() {
        let array: Endereco[] = new Array();
        for (let index = 0; index < Endereco.tipoEndereco.length; index++) {
            array.push(new Endereco({
                id: index,
                tipo: Endereco.tipoEndereco[index],
                numero: 0})
            );
        };
        return array;
    }

    constructor(obj?: any) {
        this.id            = obj && obj.id              || uuid();
        this.tpEnd         = obj && obj.tpEnd           || 'Residencial';
        this.tpRes         = obj && obj.tpRes           || 'Propria';
        this.cep           = obj && obj.cep             || '000000000';
        this.rua           = obj && obj.rua             || 'Rua';
        this.numero        = obj && obj.numero          || '0';
        this.complemento   = obj && obj.complemento     || '';
        this.cidade        = obj && obj.cidade          || 'Rio de Janeiro';
        this.estado        = obj && obj.estado          || 'RJ';
        this.pais          = obj && obj.pais            || 'Brasil';
    }
}

let clientes = [
    new Cliente({id: 1, nome: 'Leonardo',
        telefones: [{tipo: 'Residencial', numero: '1654257323'}, {tipo: 'Celular', numero: '16965341234'}],
        enderecos: [{tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
            rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil'}]}),
    new Cliente({id: 2, nome: 'Thais',
        telefones: [{tipo: 'Residencial', numero: '1654257323'}, {tipo: 'Celular', numero: '16986342234'}],
        enderecos: [{tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
            rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil'}]}),
    new Cliente({id: 3, nome: 'Sandra',
        telefones: [{tipo: 'Residencial', numero: '2122058301'}, {tipo: 'Celular', numero: '21997656435'}],
        enderecos: [{tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
            rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil'}]}),
    new Cliente({id: 4, nome: 'José',
        telefones: [{tipo: 'Residencial', numero: '2122598763'}, {tipo: 'Celular', numero: '21995742396'}],
        enderecos: [{tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
            rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil'}]}),
];

let promiseCliente = Promise.resolve(clientes);

@Injectable()
export class ClienteService {
    static nextClienteId = 100;

    getClientes() { return promiseCliente; }

    getCliente(id: number | string) {
        return promiseCliente
            .then(clients => clients.filter(c => c.id === +id)[0]);
    }

    addCliente(nome: string) {
        nome = nome.trim();
        if (name) {
            let cliente = new Cliente({id: ClienteService.nextClienteId++, nome: nome, telefones: [], enderecos: []});
            promiseCliente.then(clients => clients.push(cliente));
        }
    }
}
