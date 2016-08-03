/**
 * Created by LeonardoAlmeida on 26/04/16.
 */

import {Injectable} from '@angular/core';

export class Account {
    constructor(public id: number, public name: string) { }
}

let accounts = [
    new Account(1, 'Leonardo'),
    new Account(2, 'Sandra'),
    new Account(3, 'Thais'),
    new Account(4, 'Americo'),
];

let accountsPromise = Promise.resolve(accounts);

@Injectable()
export class AccountService {

    static nextAccountId = 100;

    watchLoginChange = function() {
        // var _self = this;
    };

    getAccount(id: number | string) {
        return accountsPromise
            .then(accts => accts.filter(c => c.id === +id)[0]);
    }

    getUserInfo = function() {

       /* var _self = this;

        FB.api('/me', function(res) {

            $rootScope.$apply(function() {

                $rootScope.user = _self.user = res;

            });

        });*/
    };

    addAccount(name: string) {
        name = name.trim();
        if (name) {
            let newAccount = new Account(AccountService.nextAccountId++, name);
            accountsPromise.then(accts => accts.push(newAccount));
        }
    }

    logout = function() {
        // var _self = this;
    };
}
