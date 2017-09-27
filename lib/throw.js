"use strict";

var processMessage = require( "./helper/processMessage" );

module.exports = function ( message ) {
	throw processMessage( message );
};
