Package.describe({
  name: 'yang2007chun:js-weighted-list',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'a wrapper for js-weighted-list',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Chun-Yang/js-weighted-list',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('js-weighted-list.js');
  api.export('WeightedList');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yang2007chun:js-weighted-list');
  api.addFiles('js-weighted-list-tests.js');
});
