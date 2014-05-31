var assert = require("assert");
var sinon = require("sinon");
var Player = require("../src/player.js");

describe('Player\'s ', function() {
	var playerA, playerB, fight;
	var playerAInfo = {
		name: '张三',
		blood: 100,
		attack: 9
	},
		playerBInfo = {
			name: '李四',
			blood: 100,
			attack: 8
		};

	beforeEach(function() {
		playerA = new Player(playerAInfo);
		playerB = new Player(playerBInfo);
		this.sinon = sinon.sandbox.create();
		this.sinon.stub(console, "log");
	});


	afterEach(function() {
		this.sinon.restore();
	});

	describe('info :', function() {
		it('should return 张三 as playerA name: ', function() {
			assert.equal('张三', playerAInfo.name);
		});

		it('should return 100 as playerA blood: ', function() {
			assert.equal(100, playerAInfo.blood);
		});

		it('should return 9 as playerA attack', function() {
			assert.equal(9, playerAInfo.attack);
		});
	});

	describe("fight: ", function() {
		it('should return fight msg: ', function() {
			playerA.fight(playerB);
			sinon.assert.calledWith(console.log, "张三攻击了李四,李四受到了9点伤害,李四剩余生命：91");
		});
	});
});