if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        return constructor.call(greeting);
        console.log(constructor);
        console.log(greeting);
    },

    iterate : function(obj) {

    }
  };
});
