"use strict";

var arrayToString = require( "array-to-string-with-indentation" );

module.exports = function ( ErrorType ) {
	return function ( message ) {
		throw new ErrorType( arrayToString( message ) );
	};
};
