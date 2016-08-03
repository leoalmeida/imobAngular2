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
var router_1 = require('@angular/router');
var app_routes_1 = require('./app.routes');
var sidenav_1 = require('@angular2-material/sidenav');
var toolbar_1 = require('@angular2-material/toolbar');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var radio_dispatcher_1 = require('@angular2-material/radio/radio_dispatcher');
var progress_circle_1 = require('@angular2-material/progress-circle');
var progress_bar_1 = require('@angular2-material/progress-bar');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var list_1 = require('@angular2-material/list');
var icon_1 = require('@angular2-material/icon');
var button_1 = require('@angular2-material/button');
var use_avatar_component_1 = require('./componentes/utils/use-avatar.component');
var logger_service_1 = require('./blocks/logger.service');
var AppComponent = (function () {
    function AppComponent(logger) {
        this.logger = logger;
        this.appRoutes = app_routes_1.APP_ROUTES;
        this.loggedUser = { firstname: 'Leonardo', lastname: 'Almeida', email: 'leoalmeida.rj@gmail.com' };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'as-main-app',
            templateUrl: 'app/app.html',
            styleUrls: ['app/app.css'],
            providers: [radio_dispatcher_1.MdRadioDispatcher, icon_1.MdIconRegistry],
            directives: [
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                toolbar_1.MdToolbar,
                button_1.MdButton,
                checkbox_1.MdCheckbox,
                radio_1.MdRadioButton,
                progress_circle_1.MdSpinner,
                input_1.MD_INPUT_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                progress_bar_1.MdProgressBar,
                icon_1.MdIcon,
                use_avatar_component_1.UserAvatarComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes(app_routes_1.APP_ROUTES), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/app.component.js.map