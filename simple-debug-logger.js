"use strict";

function getMessageProcessorWithCallback( callback ) {
	return function ( message ) {
		callback(
			message instanceof Array ?
			message.join( "\n" ) :
			message
		);
	};
}

function getThrowError( ErrorType ) {
	return function ( message ) {
		throw new ErrorType( message );
	};
}

module.exports = {
	log: getMessageProcessorWithCallback( function ( message ) {
		console.log( message );
	} ),
	throw: getMessageProcessorWithCallback( function ( message ) {
		throw message;
	} ),
	throwError: getMessageProcessorWithCallback( getThrowError( Error ) ),
	throwTypeError: getMessageProcessorWithCallback( getThrowError( TypeError ) ),
	throwRangeError: getMessageProcessorWithCallback( getThrowError( RangeError ) ),
};
