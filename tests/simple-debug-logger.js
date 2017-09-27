"use strict";
/*jshint esversion: 6*/

const chai = require( "chai" );
const expect = chai.expect;
const sinonChai = require( "sinon-chai" );
const sinon = require( "sinon" );
const debugLogger = require( "../simple-debug-logger" );

chai.should();
chai.use( sinonChai );

describe( "Implementation test", function () {

	describe( "log", function () {
		beforeEach( function () {
			this.consoleLogSpy = sinon.stub( console, "log" );
		} );

		afterEach( function () {
			this.consoleLogSpy.restore();
		} );
		describe( "message as string", function () {
			it( "simple string", function () {
				debugLogger.log( "testMessage" );

				expect( this.consoleLogSpy )
					.to.have.been.calledWith( "testMessage" );
			} );

			it( "string with space", function () {
				debugLogger.log( "test Message" );

				expect( this.consoleLogSpy )
					.to.have.been.calledWith( "test Message" );
			} );

			it( "string with new line", function () {
				debugLogger.log( "Test Message.\nNew Line." );

				expect( this.consoleLogSpy )
					.to.have.been.calledWith( "Test Message.\nNew Line." );
			} );
		} );

		it( "message as array", function () {
			debugLogger.log( [ "first Line.", "New Line." ] );

			expect( this.consoleLogSpy )
				.to.have.been.calledWith( "first Line.\nNew Line." );
		} );
	} );

	describe( "log", function () {
		beforeEach( function () {
			this.consoleLogSpy = sinon.stub( console, "log" );
		} );

		afterEach( function () {
			this.consoleLogSpy.restore();
		} );
		describe( "message as string", function () {
			it( "simple string", function () {
				debugLogger.log( "testMessage" );

				expect( this.consoleLogSpy )
					.to.have.been.calledWith( "testMessage" );
			} );

			it( "string with space", function () {
				debugLogger.log( "test Message" );

				expect( this.consoleLogSpy )
					.to.have.been.calledWith( "test Message" );
			} );

			it( "string with new line", function () {
				debugLogger.log( "Test Message.\nNew Line." );

				expect( this.consoleLogSpy )
					.to.have.been.calledWith( "Test Message.\nNew Line." );
			} );
		} );

		it( "message as array", function () {
			debugLogger.log( [ "first Line.", "New Line." ] );

			expect( this.consoleLogSpy )
				.to.have.been.calledWith( "first Line.\nNew Line." );
		} );
	} );

	describe( "throwing", function () {
		function getCall( what, message ) {
			return function () {
				debugLogger[ what ]( message );
			};
		}
		describe( "throw", function () {
			it( "string", function () {
				var callThrow = getCall( "throw", "testError" );
				expect( callThrow )
					.to.throw( "testError" );
			} );

			it( "array", function () {
				var callThrow = getCall( "throw", [ "testError", "New Line." ] );

				expect( callThrow )
					.to.throw( "testError\nNew Line." );
			} );
		} );

		describe( "Error throwing", function () {
			it( "throwError", function () {
				var callThrow = getCall( "throwError", "fooBar" );

				expect( callThrow )
					.to.throw( Error );

				expect( callThrow )
					.to.throw( "fooBar" );
			} );

			it( "throwTypeError", function () {
				var callThrow = getCall( "throwTypeError", "fooBar" );

				expect( callThrow )
					.to.throw( TypeError );

				expect( callThrow )
					.to.throw( "fooBar" );
			} );

			it( "throwRangeError", function () {
				var callThrow = getCall( "throwRangeError", "fooBar" );

				expect( callThrow )
					.to.throw( RangeError );

				expect( callThrow )
					.to.throw( "fooBar" );
			} );
		} );
	} );

} );
