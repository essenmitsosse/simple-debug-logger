"use strict";

var processMessage = require( "./processMessage" );

module.exports = function ( ErrorType ) {
	return function ( message ) {
		throw new ErrorType( processMessage( message ) );
	};
};
