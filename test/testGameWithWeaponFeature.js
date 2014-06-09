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

describe('Game with career and weapon feature: ', function() {
	var warriorInfo = {
		name: '张三',
		blood: 20,
		attackPoint: 9,
		career: CAREER.WARRIOR,
		weapon: WEAPON.SWORD,
		armor: ARMOR
	},
		playerInfo = {
			name: '李四',
			blood: 20,
			attackPoint: 8,
			career: CAREER.NORMAL
		},
		warriorBInfo = {
			name: '王五',
			blood: 20,
			attackPoint: 9,
			career: CAREER.WARRIOR,
			weapon: WEAPON.FIRE,
			armor: {
				defense: 5
			}
		};

	var warrior, player, game, fightDetail;

	beforeEach(function() {
		warrior = new Warrior(warriorInfo);
		player = new Player(playerInfo);
		warriorB = new Warrior(warriorBInfo);
		fightDetail = new FightDetail();
	});

	afterEach(function() {
		game.isToTriggerFeature.restore();
		console.log.restore();
	});

	describe('two players begin to fight:', function() {
		it('warrior fight with normal, trigger feature, should return attack info and damage info: ', function() {
			game = new Game(warrior, player);

			sinon.stub(game, "isToTriggerFeature", function() {
				console.log("//武器特性被触发了");
				return 1;
			});
			sinon.spy(console, "log");

			game.start();
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了普通人李四,李四受到了13点伤害,李四中毒了,李四剩余生命：7");
			sinon.assert.calledWith(console.log, "李四受到2点毒性伤害,李四剩余生命：5");
			sinon.assert.calledWith(console.log, "李四被打败了");
		});

		it('warrior fight with normal, not trigger feature, should return attack info and damage info: ', function() {
			game = new Game(warrior, player);

			sinon.stub(game, "isToTriggerFeature", function() {
				console.log("//武器特性没有被触发");
				return 0;
			});
			sinon.spy(console, "log");

			game.start();
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了普通人李四,李四受到了13点伤害,李四中毒了,李四剩余生命：7");
			sinon.assert.calledWith(console.log, "普通人李四攻击了战士张三,张三受到了6点伤害,张三剩余生命：14");
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了普通人李四,李四受到了13点伤害,李四中毒了,李四剩余生命：-6");
			sinon.assert.calledWith(console.log, "李四被打败了");
		});

		it('normal fight with warrior, trigger feature, should return attack info and damage info: ', function() {
			game = new Game(player, warrior);

			sinon.stub(game, "isToTriggerFeature", function() {
				return 1;
			});
			sinon.spy(console, "log");

			game.start();
			sinon.assert.calledWith(console.log, "普通人李四攻击了战士张三,张三受到了6点伤害,张三剩余生命：14");
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了普通人李四,李四受到了13点伤害,李四中毒了,李四剩余生命：7");
			sinon.assert.calledWith(console.log, "李四受到2点毒性伤害,李四剩余生命：5");
			sinon.assert.calledWith(console.log, "普通人李四攻击了战士张三,张三受到了6点伤害,张三剩余生命：8");
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了普通人李四,李四受到了13点伤害,李四中毒了,李四剩余生命：-8");
			sinon.assert.calledWith(console.log, "李四受到2点毒性伤害,李四剩余生命：-10");
			sinon.assert.calledWith(console.log, "李四被打败了");
		});

		it('warrior fight with warrior, should return attack info and damage info: ', function() {
			game = new Game(warrior, warriorB);

			sinon.stub(game, "isToTriggerFeature", function() {
				return 1;
			});
			sinon.spy(console, "log");

			game.start();
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了战士王五,王五受到了8点伤害,王五中毒了,王五剩余生命：12");
			sinon.assert.calledWith(console.log, "王五受到2点毒性伤害,王五剩余生命：10");
			sinon.assert.calledWith(console.log, "战士王五用火焰剑攻击了战士张三,张三受到了10点伤害,张三着火了,张三剩余生命：10");
			sinon.assert.calledWith(console.log, "张三受到1点火焰伤害,张三剩余生命：9");
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了战士王五,王五受到了8点伤害,王五中毒了,王五剩余生命：2");
			sinon.assert.calledWith(console.log, "王五受到2点毒性伤害,王五剩余生命：0");
			sinon.assert.calledWith(console.log, "王五被打败了");
		});

		it('warrior fight with warrior, not trigger feature, should return attack info and damage info: ', function() {
			game = new Game(warrior, warriorB);

			sinon.stub(game, "isToTriggerFeature", function() {
				console.log("//武器特性没有被触发");
				return 0;
			});
			sinon.spy(console, "log");

			game.start();
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了战士王五,王五受到了8点伤害,王五中毒了,王五剩余生命：12");
			sinon.assert.calledWith(console.log, "战士王五用火焰剑攻击了战士张三,张三受到了10点伤害,张三着火了,张三剩余生命：10");
			sinon.assert.calledWith(console.log, "战士张三用优质毒剑攻击了战士王五,王五受到了8点伤害,王五中毒了,王五剩余生命：4");
			sinon.assert.calledWith(console.log, "张三被打败了");
		});
	});
});