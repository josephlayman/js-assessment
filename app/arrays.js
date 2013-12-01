if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;
        for ( var i = 0 ; i < arr.length ; i++ ){
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        var newArray = [];
        for ( var i = 0 ; i < arr.length ; i++ ){
            if( arr[i] != item ) {
                newArray.push( arr[i] );
            }
        }
        return newArray;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for ( var i = 0 ; i < arr.length ; i++ ){
            if( arr[i] === item ) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        
    },

    square : function(arr) {
        for ( var i = 0 ; i < arr.length ; i++ ){
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
