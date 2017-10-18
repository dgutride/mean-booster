'use strict';
const path = require('path');
const files = require('express').static;

module.exports = exports = function staticResources (app, root) {
  // static resources
  app.use(files(path.join(root, 'app', 'static')));

  // controllers
  app.use(files(path.join(root, 'app', 'controllers')));

  // angular
  app.use(files(path.join(root, 'node_modules', 'angular')));

  // jquery
  app.use(files(path.join(root, 'node_modules', 'jquery', 'dist')));

  // use patternfly for UI
  app.use(files(path.join(root, 'node_modules', 'patternfly', 'dist')));
  app.use(files(path.join(root, 'node_modules', 'angular-patternfly', 'dist')));
};
