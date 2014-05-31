var assert = require("assert");
var sinon = require("sinon");
var Game = require("../src/game.js");
var Player = require("../src/player.js");

beforeEach(function() {
	this.sinon = sinon.sandbox.create();
	this.sinon.stub(console, "log");
});

afterEach(function() {
	this.sinon.restore();
});

describe('Game start: ', function() {
	describe('two players begin to fight:', function() {
		it('should return playerB failed: ', function() {
			(new Game()).start();
			sinon.assert.calledOnce(console.log);
			sinon.assert.calledWithExactly(console.log, "李四被打败了");
		});
	});
});