import {HomeComponent} from './componentes/home/home.component';
import {LoginComponent} from './componentes/home/login.component';
import {ProfileComponent} from './componentes/home/profile/profile.component';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {RelatoriosComponent} from './componentes/relatorios/relatorios.component';
import {BibliotecaComponent} from './componentes/biblioteca/biblioteca.component';
import {CalendarioComponent} from './componentes/calendario/calendario.component';
import {CalculadoraComponent} from './componentes/calculadora/calculadora.component';
// import {ChatAppComponent} from './componentes/chat/chatapp.component';
import {ClientesListComponent} from './componentes/cadastro/clientes-list.component';
import {ClientesDetailComponent} from './componentes/cadastro/clientes-detail.component';
// import {TodolistComponent} from './todolist/todolist.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent, icon: 'pets', description: 'description' },
    { path: '/cadastro', name: 'Cadastro', component: CadastroComponent, icon: 'pets', description: 'description' },
    { path: '/relatorios', name: 'Relatorios', component: RelatoriosComponent, icon: 'pets', description: 'description' },
    { path: '/biblioteca', name: 'Biblioteca', component: BibliotecaComponent, icon: 'pets', description: 'description' },
    { path: '/calendario', name: 'Calendario', component: CalendarioComponent, icon: 'pets', description: 'description' },
    { path: '/profile', name: 'Profile', component: ProfileComponent, icon: 'pets', description: 'description' },
    { path: '/calculadora', name: 'Calculadora', component: CalculadoraComponent, icon: 'pets', description: 'description' },
    { path: '/login', name: 'Login', component: LoginComponent, icon: 'pets', description: 'description' }
    // { path: '/chat', name: 'Chat', component: ChatAppComponent, icon: 'pets', description: 'description' }
];

export var APP_ROUTES_CADASTRO: any[] = [
    { path: '/',   name: 'Home', component: HomeComponent, icon: 'pets', description: 'description' },
    { path: '/clientes/', name: 'ListaClientes', component: ClientesListComponent, icon: 'pets', description: 'description' },
    { path: '/clientes/:id', name: 'DetalheClientes', component: ClientesDetailComponent, icon: 'pets', description: 'description' }
   /* { path: '/imoveis/', name: 'ListaImoveis', component: ImoveisListComponent, icon: 'pets', description: 'description' },
    { path: '/imoveis/:id', name: 'DetalheImoveis', component: ImoveisDetailComponent, icon: 'pets', description: 'description' },
    { path: '/contratos/', name: 'ListasContratos', component: ContratosListComponent, icon: 'pets', description: 'description' },
    { path: '/contratos/:id', name: 'DetalheContratos', component: ContratosDetailComponent, icon: 'pets', description: 'description' },
    { path: '/eventos/', name: 'ListaEventos', component: EventosListComponent, icon: 'pets', description: 'description' },
    { path: '/eventos/:id', name: 'DetalheEventos', component: EventosDetailComponent, icon: 'pets', description: 'description' },
    { path: '/boletos/', name: 'ListaBoletos', component: BoletosListComponent, icon: 'pets', description: 'description' },
    { path: '/boletos/:id', name: 'DetalheBoleto', component: BoletosDetailComponent, icon: 'pets', description: 'description'  }*/
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
