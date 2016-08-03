import {Component} from '@angular/core';

import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {APP_ROUTES_CADASTRO} from '../../app.routes';
import {ClienteService} from '../../services/cliente.service';

@Component({template: `
        <h2>CADASTRO CENTER</h2>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers:  [ClienteService]
})
@Routes(APP_ROUTES_CADASTRO)
export class CadastroComponent {
    private myname: string;

    constructor() {
        this.myname = 'Simple';
    }
}
