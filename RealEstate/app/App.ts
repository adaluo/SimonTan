﻿/// <reference path="_all.ts" />

module app {
    'use strict';

    angular.module('app', [
        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */ 
        'ngResource',
        'app.core',
        'app.widgets',

        /*
         * Feature areaa
         */
        'app.layout',
        'app.useraccount',
        'app.test',
        'app.about',
        'app.listings',
        'app.manage'           
    ]);

}
