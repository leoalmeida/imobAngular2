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
var Account = (function () {
    function Account(id, name) {
        this.id = id;
        this.name = name;
    }
    return Account;
}());
exports.Account = Account;
var accounts = [
    new Account(1, 'Leonardo'),
    new Account(2, 'Sandra'),
    new Account(3, 'Thais'),
    new Account(4, 'Americo'),
];
var accountsPromise = Promise.resolve(accounts);
var AccountService = (function () {
    function AccountService() {
        this.watchLoginChange = function () {
            // var _self = this;
        };
        this.getUserInfo = function () {
            /* var _self = this;
     
             FB.api('/me', function(res) {
     
                 $rootScope.$apply(function() {
     
                     $rootScope.user = _self.user = res;
     
                 });
     
             });*/
        };
        this.logout = function () {
            // var _self = this;
        };
    }
    AccountService.prototype.getAccount = function (id) {
        return accountsPromise
            .then(function (accts) { return accts.filter(function (c) { return c.id === +id; })[0]; });
    };
    AccountService.prototype.addAccount = function (name) {
        name = name.trim();
        if (name) {
            var newAccount_1 = new Account(AccountService.nextAccountId++, name);
            accountsPromise.then(function (accts) { return accts.push(newAccount_1); });
        }
    };
    AccountService.nextAccountId = 100;
    AccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=/Users/LeonardoAlmeida/WebstormProjects/imobapp/app/services/account.service.js.map