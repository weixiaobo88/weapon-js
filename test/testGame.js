var assert = require("assert");
var sinon = require("sinon");

var Game = require("../src/game.js");
var Player = require("../src/player.js");
var FightDetail = require("../src/fightDetail.js");

describe('Game: ', function() {
	var playerAInfo = {
		name: '张三',
		blood: 10,
		attackPoint: 9
	},
		playerBInfo = {
			name: '李四',
			blood: 10,
			attackPoint: 8
		};
	var game = new Game(playerAInfo, playerBInfo);

	beforeEach(function() {
		this.sinon = sinon.sandbox.create();
		this.sinon.spy(console, "log");
	});

	afterEach(function() {
		this.sinon.restore();
	});

	describe('two players begin to fight:', function() {
		it('should return playerB failed: ', function() {
			game.start();
			sinon.assert.calledWith(console.log, "李四被打败了");
		});
	});

});