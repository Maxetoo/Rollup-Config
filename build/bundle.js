'use strict';

// import foo from './foo'
module.exports = function() {
    Promise.resolve().then(function () { return foo$1; }).then(({ default: foo }) => console.log(foo));
};

var foo = 'Hello Rollup';

var foo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': foo
});
