import {
    Router,
    RouterConfig,
    ActivatedRoute,
    RouterOutletMap,
    UrlSerializer,
    DefaultUrlSerializer
} from '@angular/router';
import {
    async,
    inject,
    addProviders,
    ComponentFixture
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component, ComponentResolver, Injector } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'as-test',
    template: '<div><as-main-app></as-main-app></div>',
    directives: [AppComponent]
})
class TestComponent {
}

let config: RouterConfig = [
    {path: '', component: HomeComponent},
];

// TODO: Use ROUTER_FAKE_PROVIDERS when it's available
describe('AppComponent', () => {
    beforeEach(() => {
        addProviders([
            RouterOutletMap,
            {provide: LocationStrategy, useClass: SpyLocation},
            {provide: UrlSerializer, useClass: DefaultUrlSerializer},
            {provide: Location, useClass: SpyLocation},
            {
                provide: Router,
                useFactory: (
                    resolver: ComponentResolver,
                    urlSerializer: UrlSerializer,
                    outletMap: RouterOutletMap,
                    location: Location,
                    injector: Injector) => {
                        const r = new Router(TestComponent, resolver, urlSerializer, outletMap, location, injector, config);
                        return r;
                },
                deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
            },
            {provide: ActivatedRoute, useFactory: (r: Router) => r.routerState.root, deps: [Router]},
        ]);
    });

    it('should have brand Angular 2 Starter', async(inject([TestComponentBuilder],
        (tsb: TestComponentBuilder) => {
            tsb.createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
                expect(compiled.querySelector('a.navbar-brand'))
                    .toContainText('Angular 2 Starter');
            });
        })));
});
