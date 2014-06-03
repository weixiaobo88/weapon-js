var assert = require("assert");
var sinon = require("sinon");

var Game = require("../src/game.js");
var Warrior = require("../src/warrior.js");
var Player = require("../src/player.js");
var FightDetail = require("../src/fightDetail.js");

var CAREER = {
	NORMAL: "普通人",
	WARRIOR: "战士"
};
var WEAPON = {
	NOWEAPON: {
		name: "",
		attackPoint: 0
	},
	STICK: {
		name: "优质木棒",
		attackPoint: 2
	}
};

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
	var playerA = new Player(playerAInfo),
		playerB = new Player(playerBInfo),
		game = new Game(playerA, playerB);

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

describe('Game with career: ', function() {
	var playerAInfo = {
		name: '张三',
		blood: 10,
		attackPoint: 9,
		career: CAREER.WARRIOR,
		weapon: WEAPON.STICK
	},
		playerBInfo = {
			name: '李四',
			blood: 10,
			attackPoint: 8,
			career: CAREER.NORMAL
		};
	var playerA = new Warrior(playerAInfo),
		playerB = new Player(playerBInfo),
		game = new Game(playerA, playerB);

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