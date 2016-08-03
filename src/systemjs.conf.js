/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function(global) {
    // ENV
    global.ENV = global.ENV || 'development';

    // map tells the System loader where to look for things
    var map = {
<<<<<<< HEAD:systemjs.conf.js
        'app': 'tmp/app',
        'test': 'tmp/test',
        'rxjs': 'n:rxjs',
        '@angular': 'n:@angular',
        '@angular2-material': 'n:@angular2-material',
        'lodash': 'n:lodash'
=======
        'app': 'src/tmp/app',
        'test': 'src/tmp/test'
>>>>>>> c8aab84f0eb3309bb0dfd87fc2b8fea7883dbfdb:src/systemjs.conf.js
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        'test': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        }
    };

    // List npm packages here
    var npmPackages = [
        '@angular',
        'rxjs',
        'lodash'
    ];

    // Add package entries for packages that expose barrels using index.js
    var packageNames = [
        // App barrels
        'app/shared',

        // 3rd party barrels
        'lodash'
    ];

    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];
<<<<<<< HEAD:systemjs.conf.js
    // add package entries for packages that expose barrels using index.js
    var packageNames = [
        'lodash'
    ];
=======

    npmPackages.forEach(function (pkgName) {
        map[pkgName] = 'node_modules/' + pkgName;
    });

    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });
>>>>>>> c8aab84f0eb3309bb0dfd87fc2b8fea7883dbfdb:src/systemjs.conf.js

    ngPackageNames.forEach(function(pkgName) {
        var main = global.ENV === 'testing' ? 'index.js' :
            'bundles/' + pkgName + '.umd.js';

        packages['@angular/'+pkgName] = { main: main, defaultExtension: 'js' };
    });

<<<<<<< HEAD:systemjs.conf.js
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    // Angular Material 2 Packages to load.
    var materialPackages = [
      'core', 'toolbar', 'button', 'card', 'checkbox', 'icon', 'input', 'list', 'progress-bar',
      'progress-circle', 'radio', 'sidenav', 'grid-list', 'tabs', 'slide-toggle'
    ];

    materialPackages.forEach(function(item) {
      // All Material 2 components are prefixed with  @angular2-material and use
      // the components name as entry point.
      packages['@angular2-material/' + item] = { format: 'cjs', defaultExtension: 'js', main: item };
    });

=======
>>>>>>> c8aab84f0eb3309bb0dfd87fc2b8fea7883dbfdb:src/systemjs.conf.js
    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
