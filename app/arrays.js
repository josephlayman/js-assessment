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
        var newArray = [];
        arr.push(item);
        return newArray = arr;
    },

    truncate : function(arr) {
        var newArray = [];
        arr.pop();
        return newArray = arr;
    },

    prepend : function(arr, item) {
        var newArray = [];
        arr.unshift(item);
        return newArray = arr;
    },

    curtail : function(arr) {
        var newArray = [];
        arr.shift();
        return newArray = arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {

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

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
