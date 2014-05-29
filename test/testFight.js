var assert = require("assert");
var Player = require("../src/player.js");
var Fight = require("../src/fight.js");

describe('Two players ', function() {
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
		fight = new Fight();
	});

	describe('begin fight:', function() {
		it('should return playerB failed: ', function() {
			assert.equal('李四被打败了', fight.start(playerA, playerB));
		});
	});

});