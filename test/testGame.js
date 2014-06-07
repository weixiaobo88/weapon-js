var assert = require("assert");
var sinon = require("sinon");

var Game = require("../src/game.js");
var Player = require("../src/player.js");
var Warrior = require("../src/warrior.js");
var FightDetail = require("../src/fightDetail.js");
var WEAPON = require("../src/weapon.js");

var CAREER = {
	NORMAL: "普通人",
	WARRIOR: "战士"
};

var ARMOR = {
	defense: 2
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
			playerA.attack.restore();
		});

		it('should call playerB attack once: ', function() {
			var spyPlayerBAttack = sinon.spy(playerB, "attack");
			game.start();
			sinon.assert.callCount(spyPlayerBAttack, 1);
			playerB.attack.restore();
		});

		it('should return playerB failed: ', function() {
			var spyConsole = sinon.spy(console, "log");
			var spyPlayerAAttack = sinon.spy(playerA, "attack");
			game.start();
			spyConsole.calledAfter(spyPlayerAAttack);
			sinon.assert.calledWith(console.log, "李四被打败了");
			playerA.attack.restore();
			console.log.restore();
		});
	});
});

describe('Game with career: ', function() {
	var warriorInfo = {
		name: '张三',
		blood: 10,
		attackPoint: 9,
		career: CAREER.WARRIOR,
		weapon: WEAPON.STICK,
		armor: ARMOR
	},
		playerInfo = {
			name: '李四',
			blood: 10,
			attackPoint: 8,
			career: CAREER.NORMAL
		},
		warriorBInfo = {
			name: '王五',
			blood: 10,
			attackPoint: 8,
			career: CAREER.WARRIOR,
			weapon: WEAPON.STICK,
			armor: {
				defense: 3
			}
		};
	var warrior, warriorB, player, game;

	beforeEach(function() {
		warrior = new Warrior(warriorInfo);
		warriorB = new Warrior(warriorBInfo);
		player = new Player(playerInfo);
	});

	describe('begin fight: ', function() {
		it('warrior begin to fight with normal, should return player failed: ', function() {
			game = new Game(warrior, player);
			sinon.spy(console, "log");
			game.start();
			sinon.assert.calledWith(console.log, "战士张三用优质木棒攻击了普通人李四,李四受到了11点伤害,李四剩余生命：-1");
			sinon.assert.calledWith(console.log, "李四被打败了");
			console.log.restore();
		});

		it('warrior begin to fight with warriorB, should return warriorB failed: ', function() {
			game = new Game(warrior, warriorB);
			sinon.spy(console, "log");
			game.start();
			sinon.assert.calledWith(console.log, "战士张三用优质木棒攻击了战士王五,王五受到了8点伤害,王五剩余生命：2");
			sinon.assert.calledWith(console.log, "战士王五用优质木棒攻击了战士张三,张三受到了8点伤害,张三剩余生命：2");
			sinon.assert.calledWith(console.log, "战士张三用优质木棒攻击了战士王五,王五受到了8点伤害,王五剩余生命：-6");
			sinon.assert.calledWith(console.log, "王五被打败了");
			console.log.restore();
		});

		it('normal player begin to fight with warrior, should return normal player failed: ', function() {
			game = new Game(player, warrior);
			sinon.spy(console, "log");
			game.start();
			sinon.assert.calledWith(console.log, "普通人李四攻击了战士张三,张三受到了6点伤害,张三剩余生命：4");
			sinon.assert.calledWith(console.log, "战士张三用优质木棒攻击了普通人李四,李四受到了11点伤害,李四剩余生命：-1");
			sinon.assert.calledWith(console.log, "李四被打败了");
			console.log.restore();
		});

		it('normal player begin to fight with normal playerB, should return normal playerB failed: ', function() {
			var playerBInfo = {
				name: '赵六',
				blood: 10,
				attackPoint: 7,
				career: CAREER.NORMAL
			};
			var playerB = new Player(playerBInfo);
			game = new Game(player, playerB);
			sinon.spy(console, "log");
			game.start();
			sinon.assert.calledWith(console.log, "普通人李四攻击了普通人赵六,赵六受到了8点伤害,赵六剩余生命：2");
			sinon.assert.calledWith(console.log, "普通人赵六攻击了普通人李四,李四受到了7点伤害,李四剩余生命：3");
			sinon.assert.calledWith(console.log, "普通人李四攻击了普通人赵六,赵六受到了8点伤害,赵六剩余生命：-6");
			sinon.assert.calledWith(console.log, "赵六被打败了");
			console.log.restore();
		});
	});
});