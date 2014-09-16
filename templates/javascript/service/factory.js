'use strict';

/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= cameledName %>
 * @description
 * # <%= cameledName %>
 * Factory in the <%= scriptAppName %>.
 */
angular.module('<%= scriptAppName %>')
  .factory('<%= cameledName %>', function ($resource) {
    return $resource('/api/<%= name %>/:id', { id: '@id'},
                    {'query': {method: 'GET', isArray: false}},
                    { 'update': { method: 'PUT' } } );
  });
