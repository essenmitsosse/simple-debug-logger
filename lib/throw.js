"use strict";

var arrayToString = require( "array-to-string-with-indentation" );

module.exports = function ( message ) {
	throw arrayToString( message );
};
