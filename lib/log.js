"use strict";

var processMessage = require( "./helper/processMessage" );

module.exports = function ( message ) {
	console.log( processMessage( message ) );
};
