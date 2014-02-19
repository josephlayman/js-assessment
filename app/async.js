if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var deferred = $.Deferred();

      	setTimeout(function() {
        	deferred.resolve(value);
      	}, 10);
      	
      	return deferred.promise();
    },

    manipulateRemoteData : function(url) {
    	var deferred = $.Deferred();

	    $.getJSON(url).then(function(response) {
	    	var people = $.map(response.people, function(person) {
	    		return person.name;
	    	});
	    	deferred.resolve(people.sort());
	    });

	    return deferred.promise();

    }
  };
});
