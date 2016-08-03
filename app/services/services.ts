/**
 * Created by LeonardoAlmeida on 26/05/16.
 */

import {AccountService} from './account.service';
import {BoletoService} from './boleto.service';
import {ClienteService} from './cliente.service';
import {ContratosService} from './contrato.service';
import {DialogService} from './dialog.service';
import {EventosService} from './evento.service';
import {ImoveisService} from './imovel.service';

export * from './account.service';
export * from './boleto.service';
export * from './cliente.service';
export * from './contrato.service';
export * from './dialog.service';
export * from './evento.service';
export * from './imovel.service';

export var servicesInjectables: Array<any> = [
    AccountService,
    BoletoService,
    ClienteService,
    ContratosService,
    DialogService,
    EventosService,
    ImoveisService
];
