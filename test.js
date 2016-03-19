var shellEmulator = require('./index.js');

var shellFunctions = {
    setCaretPosition: function () {},
    postMessage: function () {},
    scrollDown: function () {},
    interrupt: function () {}
};

var shell = {
    on: function() {},
    keyup: function() {},
    keydown: function() {}

};

shellEmulator.create(shell, 'history', shellFunctions)

console.log('Done testing. All good');