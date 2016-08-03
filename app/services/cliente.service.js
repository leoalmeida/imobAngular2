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
var uuid_1 = require('../componentes/utils/uuid');
var Cliente = (function () {
    function Cliente(obj) {
        this.id = obj && obj.id || uuid_1.uuid();
        this.nome = obj && obj.nome || 'nome';
        this.telefones = obj && obj.telefones || Telefone.newTelefoneList();
        this.enderecos = obj && obj.enderecos || Endereco.newEnderecoList();
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var Telefone = (function () {
    function Telefone(obj) {
        this.id = obj && obj.id || uuid_1.uuid();
        this.tipo = obj && obj.tipo || 'Residencial';
        this.numero = obj && obj.numero || 0;
    }
    Telefone.newTelefoneList = function () {
        var array = new Array();
        for (var index = 0; index < Telefone.tipoTelefone.length; index++) {
            array.push(new Telefone({
                id: index,
                tipo: Telefone.tipoTelefone[index],
                numero: 0 }));
        }
        ;
        return array;
    };
    Telefone.tipoTelefone = ['Residencial', 'Celular', 'Comercial'];
    return Telefone;
}());
exports.Telefone = Telefone;
var Endereco = (function () {
    function Endereco(obj) {
        this.id = obj && obj.id || uuid_1.uuid();
        this.tpEnd = obj && obj.tpEnd || 'Residencial';
        this.tpRes = obj && obj.tpRes || 'Propria';
        this.cep = obj && obj.cep || '000000000';
        this.rua = obj && obj.rua || 'Rua';
        this.numero = obj && obj.numero || '0';
        this.complemento = obj && obj.complemento || '';
        this.cidade = obj && obj.cidade || 'Rio de Janeiro';
        this.estado = obj && obj.estado || 'RJ';
        this.pais = obj && obj.pais || 'Brasil';
    }
    Endereco.newEnderecoList = function () {
        var array = new Array();
        for (var index = 0; index < Endereco.tipoEndereco.length; index++) {
            array.push(new Endereco({
                id: index,
                tipo: Endereco.tipoEndereco[index],
                numero: 0 }));
        }
        ;
        return array;
    };
    Endereco.tipoEndereco = ['Residencial', 'Corporativo'];
    Endereco.tipoResidencia = ['Propria', 'Alugada', 'Temporada', 'Familiar'];
    return Endereco;
}());
exports.Endereco = Endereco;
var clientes = [
    new Cliente({ id: 1, nome: 'Leonardo',
        telefones: [{ tipo: 'Residencial', numero: '1654257323' }, { tipo: 'Celular', numero: '16965341234' }],
        enderecos: [{ tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
                rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil' }] }),
    new Cliente({ id: 2, nome: 'Thais',
        telefones: [{ tipo: 'Residencial', numero: '1654257323' }, { tipo: 'Celular', numero: '16986342234' }],
        enderecos: [{ tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
                rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil' }] }),
    new Cliente({ id: 3, nome: 'Sandra',
        telefones: [{ tipo: 'Residencial', numero: '2122058301' }, { tipo: 'Celular', numero: '21997656435' }],
        enderecos: [{ tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
                rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil' }] }),
    new Cliente({ id: 4, nome: 'José',
        telefones: [{ tipo: 'Residencial', numero: '2122598763' }, { tipo: 'Celular', numero: '21995742396' }],
        enderecos: [{ tipo: 'Residencial', tipoResidencia: 'Propria', cep: '000000000',
                rua: 'Rua dos passarinhos', numero: '22', complemento: '', cidade: 'Rio de Janeiro', estado: 'RJ', pais: 'Brasil' }] }),
];
var promiseCliente = Promise.resolve(clientes);
var ClienteService = (function () {
    function ClienteService() {
    }
    ClienteService.prototype.getClientes = function () { return promiseCliente; };
    ClienteService.prototype.getCliente = function (id) {
        return promiseCliente
            .then(function (clients) { return clients.filter(function (c) { return c.id === +id; })[0]; });
    };
    ClienteService.prototype.addCliente = function (nome) {
        nome = nome.trim();
        if (name) {
            var cliente_1 = new Cliente({ id: ClienteService.nextClienteId++, nome: nome, telefones: [], enderecos: [] });
            promiseCliente.then(function (clients) { return clients.push(cliente_1); });
        }
    };
    ClienteService.nextClienteId = 100;
    ClienteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/services/cliente.service.js.map