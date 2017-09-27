"use strict";

var arrayToString = require( "array-to-string-with-indentation" );

module.exports = function ( message ) {
	console.log( arrayToString( message ) );
};
