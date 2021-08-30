'use strict';

const isRenderer = require('is-electron-renderer');

if (isRenderer) {
  module.exports = require('./lib/renderer');
} else if (typeof require('electron') !== 'string') {
  module.exports = require('./lib/main');
} else {
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.warn('Unsupported environment for hadron-ipc');
  }
  module.exports = {};
}
