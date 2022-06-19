'use strict';

// import foo from './foo'

module.exports = function() {
    Promise.resolve().then(function () { return require('./foo-32b2009c.js'); }).then(({ default: foo }) => console.log(foo));
};
