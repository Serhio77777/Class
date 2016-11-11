'use strict';

// libraries
import _ from 'lodash';
import angular from 'angular';


// controllers

import contr from './controllers/controller';
import contrAll from './controllers/forAllController';
import contrFewClass from './controllers/fewClassesController';
import contrMixin from './controllers/mixinsController';
// configs

//directives

// services

angular.module('app', [contr, contrAll, contrFewClass, contrMixin])
    .run(() => {
        'ngInject';
          console.log('12332');
    });
