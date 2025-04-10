'use strict';

const build = require('@microsoft/sp-build-web');

// Suppress warnings (optional, based on your needs)
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// Redirect 'serve' task to 'serve-deprecated' (this is a common configuration)
var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  // Redirect the 'serve' task to the deprecated one
  result.set('serve', result.get('serve-deprecated'));

  return result;
};

// Initialize the SPFx build process
build.initialize(require('gulp'));
