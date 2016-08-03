"use strict";
var home_component_1 = require('./componentes/home/home.component');
var login_component_1 = require('./componentes/home/login.component');
var profile_component_1 = require('./componentes/home/profile/profile.component');
var cadastro_component_1 = require('./componentes/cadastro/cadastro.component');
var relatorios_component_1 = require('./componentes/relatorios/relatorios.component');
var biblioteca_component_1 = require('./componentes/biblioteca/biblioteca.component');
var calendario_component_1 = require('./componentes/calendario/calendario.component');
var calculadora_component_1 = require('./componentes/calculadora/calculadora.component');
// import {ChatAppComponent} from './componentes/chat/chatapp.component';
var clientes_list_component_1 = require('./componentes/cadastro/clientes-list.component');
var clientes_detail_component_1 = require('./componentes/cadastro/clientes-detail.component');
// import {TodolistComponent} from './todolist/todolist.component';
exports.APP_ROUTES = [
    { path: '/', name: 'Home', component: home_component_1.HomeComponent, icon: 'pets', description: 'description' },
    { path: '/cadastro', name: 'Cadastro', component: cadastro_component_1.CadastroComponent, icon: 'pets', description: 'description' },
    { path: '/relatorios', name: 'Relatorios', component: relatorios_component_1.RelatoriosComponent, icon: 'pets', description: 'description' },
    { path: '/biblioteca', name: 'Biblioteca', component: biblioteca_component_1.BibliotecaComponent, icon: 'pets', description: 'description' },
    { path: '/calendario', name: 'Calendario', component: calendario_component_1.CalendarioComponent, icon: 'pets', description: 'description' },
    { path: '/profile', name: 'Profile', component: profile_component_1.ProfileComponent, icon: 'pets', description: 'description' },
    { path: '/calculadora', name: 'Calculadora', component: calculadora_component_1.CalculadoraComponent, icon: 'pets', description: 'description' },
    { path: '/login', name: 'Login', component: login_component_1.LoginComponent, icon: 'pets', description: 'description' }
];
exports.APP_ROUTES_CADASTRO = [
    { path: '/', name: 'Home', component: home_component_1.HomeComponent, icon: 'pets', description: 'description' },
    { path: '/clientes/', name: 'ListaClientes', component: clientes_list_component_1.ClientesListComponent, icon: 'pets', description: 'description' },
    { path: '/clientes/:id', name: 'DetalheClientes', component: clientes_detail_component_1.ClientesDetailComponent, icon: 'pets', description: 'description' }
];
/*
<li class="dropdown">
<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
<i class="fa fa-database fa-fw"></i>&nbsp; Cadastro <span class="caret"></span>
</a>
<ul class="dropdown-menu" role="menu">
<li><a href="./cadastro/clientes"><i class="fa fa-group fa-fw"></i>&nbsp;&nbsp;&nbsp;&nbsp;Clientes</a></li>
<li><a href="./cadastro/eventos"><i class="fa fa-flag-o fa-fw"></i>&nbsp;&nbsp;&nbsp;&nbsp;Eventos</a></li>
<li class="divider"></li>
<li><a href="./cadastro/imoveis"><i class="fa fa-building-o fa-fw"></i>&nbsp;&nbsp;&nbsp;&nbsp;Im&oacute;veis</a></li>
<li><a href="./cadastro/contratos"><i class="fa fa-legal fa-fw"></i>&nbsp;&nbsp;&nbsp;&nbsp;Contratos</a></li>
<li class="divider"></li>
</ul>
</li>

<li class="dropdown" ng-hide="true">
<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
<i class="fa fa-calculator fa-fw"></i>&nbsp; Calculadoras <span class="caret"></span></a>
<ul class="dropdown-menu" role="menu">
<li><a href="" data-toggle="modal" data-target="#calc-overlay" aria-expanded="false">
<i class="fa fa-calculator fa-fw"></i>&nbsp;&nbsp;&nbsp;&nbsp; Padr&atilde;o</a></li>
<li>
    <a href="./calculadoras/emprestimo"><i class="fa fa-list-ol fa-fw"></i>&nbsp;&nbsp;&nbsp;&nbsp; Empr&eacute;stimo</a>
</li>
</ul>
</li>
<li>
    <a href="./login">
<i class="fa fa-cloud-upload fa-fw"></i>{{authButtonLabel()}}
</a>
</li>
    */
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/app.routes.js.map