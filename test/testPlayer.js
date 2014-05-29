var assert = require("assert");
var Player = require("../src/player.js");

describe('Player\'s ', function() {
	var player,
		playerInfo = {
			name: '张三',
			blood: 100,
			attack: 9
		};

	beforeEach(function() {
		player = new Player(playerInfo);
	});

	describe('info :', function() {
		it('should return 张三 as player name: ', function() {
			assert.equal('张三', player.getName());
		});

		it('should return 100 as player blood: ', function() {
			assert.equal(100, player.getBlood());
		});

		it('should return 9 as player attack', function() {
			assert.equal(9, player.getAttack());
		});
	});

});