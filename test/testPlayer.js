var assert = require("assert");
var sinon = require("sinon");
var Player = require("../src/player.js");

describe('Player\'s ', function() {
	var playerA, playerB, fight;
	var playerAInfo = {
		name: '张三',
		blood: 100,
		attackPoint: 9
	},
		playerBInfo = {
			name: '李四',
			blood: 100,
			attackPoint: 8
		};

	beforeEach(function() {
		playerA = new Player(playerAInfo);
		playerB = new Player(playerBInfo);
	});

	describe('info :', function() {
		it('should return attack detail once playerA attack playerB', function() {
			var fightDetail = playerA.attack(playerB);
			assert.equal('张三', fightDetail.attacker);
			assert.equal('李四', fightDetail.attackee);
			assert.equal('9', fightDetail.attackeeInjury);
			assert.equal('91', fightDetail.attackeeBlood);

			fightDetail = playerB.attack(playerA);

			assert.equal('李四', fightDetail.attacker);
			assert.equal('张三', fightDetail.attackee);
			assert.equal('8', fightDetail.attackeeInjury);
			assert.equal('92', fightDetail.attackeeBlood);
		});

		it('should return player is not alive when blood is not larger than 0', function() {
			playerA = new Player({
				name: '张三',
				blood: 0,
				attackPoint: 9
			});
			assert.equal(false, playerA.alive());

			playerB = new Player({
				name: '李四',
				blood: -2,
				attackPoint: 9
			});
			assert.equal(false, playerA.alive());
		});

		it('should return player is not alive when blood is not larger than 0 after attacked', function() {
			playerA = new Player({
				name: '张三',
				blood: 10,
				attackPoint: 10
			});
			playerB = new Player({
				name: '李四',
				blood: 10,
				attackPoint: 8
			});
			playerA.attack(playerB);
			assert.equal(true, playerA.alive());
			assert.equal(false, playerB.alive());
		});
	});

});