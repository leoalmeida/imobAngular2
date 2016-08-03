import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdButton} from '@angular2-material/button';
import {UserAvatarComponent} from './componentes/utils/use-avatar.component';
import {LoggerService} from './blocks/logger.service';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.css'],
    providers: [MdRadioDispatcher, MdIconRegistry],
    directives: [
        MD_SIDENAV_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MdToolbar,
        MdButton,
        MdCheckbox,
        MdRadioButton,
        MdSpinner,
        MD_INPUT_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdProgressBar,
        MdIcon,
        UserAvatarComponent, ROUTER_DIRECTIVES]
})
@Routes(APP_ROUTES)
export class AppComponent {
    public appRoutes: any[];
    public loggedUser: Object;
    private logger: LoggerService;

    constructor(logger: LoggerService) {
        this.logger = logger;
        this.appRoutes = APP_ROUTES;
        this.loggedUser = {firstname: 'Leonardo', lastname: 'Almeida', email: 'leoalmeida.rj@gmail.com'};
    }
}
