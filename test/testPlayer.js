var assert = require("assert");
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
});