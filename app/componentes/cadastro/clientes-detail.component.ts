import {Component, OnInit} from '@angular/core';
import {Router, RouteSegment, OnActivate} from '@angular/router';
import {Cliente, ClienteService} from '../../services/cliente.service';

@Component({
    selector: 'as-clientes-list',
    template: `
        <ul class="items">
          <li *ngFor="let cliente of clientes"
            [class.selected]="isSelected(cliente)"
            (click)="onSelect(cliente)">
            <span class="badge">{{cliente.id}}</span> {{cliente.nome}}
          </li>
        </ul>
    `
})
export class ClientesDetailComponent implements OnInit, OnActivate {
    clientes: Cliente[];

    private selectedId: number;

    constructor(
        private service: ClienteService,
        private router: Router) {
    }

    routerOnActivate(curr: RouteSegment) {
        this.selectedId = +curr.getParam('id');
    }

    isSelected(cliente: Cliente) { return cliente.id === this.selectedId; }

    ngOnInit() {
        this.service.getClientes().then(clientes => this.clientes = clientes);
    }

    onSelect(cliente: Cliente) {
        this.router.navigate( ['DetalheClientes', { id: cliente.id }]  );
    }
}
