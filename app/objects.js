if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        
        return constructor;
    },

    iterate : function(obj) {
        
        var array = []; 
        _.each(obj, function(value, key){
            array.push( key + ': ' + value );
        });
        return array;
    }
  };
});
