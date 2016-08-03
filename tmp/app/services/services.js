/**
 * Created by LeonardoAlmeida on 26/05/16.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var account_service_1 = require('./account.service');
var boleto_service_1 = require('./boleto.service');
var cliente_service_1 = require('./cliente.service');
var contrato_service_1 = require('./contrato.service');
var dialog_service_1 = require('./dialog.service');
var evento_service_1 = require('./evento.service');
var imovel_service_1 = require('./imovel.service');
__export(require('./account.service'));
__export(require('./boleto.service'));
__export(require('./cliente.service'));
__export(require('./contrato.service'));
__export(require('./dialog.service'));
__export(require('./evento.service'));
__export(require('./imovel.service'));
exports.servicesInjectables = [
    account_service_1.AccountService,
    boleto_service_1.BoletoService,
    cliente_service_1.ClienteService,
    contrato_service_1.ContratosService,
    dialog_service_1.DialogService,
    evento_service_1.EventosService,
    imovel_service_1.ImoveisService
];

//# sourceMappingURL=services.js.map
