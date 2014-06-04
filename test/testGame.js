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
	var playerA, playerB, game, fightDetail;

	beforeEach(function() {
		playerA = new Player(playerAInfo);
		playerB = new Player(playerBInfo);
		game = new Game(playerA, playerB);
		fightDetail = new FightDetail();
	});

	describe('two players begin to fight:', function() {
		it('should call playerA attack twice: ', function() {
			var spyPlayerAAttack = sinon.spy(playerA, "attack");
			game.start();
			sinon.assert.callCount(spyPlayerAAttack, 2);
		});

		it('should call playerB attack once: ', function() {
			var spyPlayerBAttack = sinon.spy(playerB, "attack");
			game.start();
			sinon.assert.callCount(spyPlayerBAttack, 1);
		});

		it('should return playerB failed: ', function() {
			var spyConsole = sinon.spy(console, "log");
			var spyPlayerAAttack = sinon.spy(playerA, "attack");
			game.start();
			spyConsole.calledAfter(spyPlayerAAttack);
			sinon.assert.calledWith(console.log, "李四被打败了");
		});
	});

});