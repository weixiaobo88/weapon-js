var assert = require("assert");
var sinon = require("sinon");
var Warrior = require("../src/warrior.js");
var Player = require("../src/player.js");
var WEAPON = require("../src/weapon.js");

describe('Player\'s ', function() {
	var CAREER = {
		NORMAL: "普通人",
		WARRIOR: "战士"
	};
	var ARMOR = {
		defense: 2
	};
	var warrior, player;
	var warriorInfo = {
		name: '张三',
		blood: 10,
		attackPoint: 9,
		career: CAREER.WARRIOR,
		weapon: WEAPON.STICK,
		armor: ARMOR
	};
	var playerInfo = {
		name: '李四',
		blood: 10,
		attackPoint: 8,
		career: CAREER.NORMAL
	};

	beforeEach(function() {
		warrior = new Warrior(warriorInfo);
		player = new Player(playerInfo);
	});

	describe('warrior attack: ', function() {
		it('warrior fight with a normal player, should return player injury 11 as the sum of warrior attackPoint plus weapon attackPoint,  blood -1 as the difference of blood and injury: ', function() {
			var attackInfo = warrior.attack(player);
			assert.equal(11, attackInfo.attackeeInjury);
			assert.equal(-1, attackInfo.attackeeBlood);
		});

		it('normal player fight with a warrior, should return warrior injury 6 as the difference of player attackPoint minus warrior armor, blood 2 as the : ', function() {
			var attackInfo = player.attack(warrior);
			assert.equal(6, attackInfo.attackeeInjury);
			assert.equal(4, attackInfo.attackeeBlood);
		});

		it('warriorA fight with warriorB, should return warriorB injury 11 and blood 2: ', function() {
			var warriorBInfo = {
				name: '李四',
				blood: 10,
				attackPoint: 8,
				career: CAREER.WARRIOR,
				weapon: WEAPON.STICK,
				armor: {
					defense: 3
				}
			};
			var warriorB = new Warrior(warriorBInfo);

			var attackInfo = warrior.attack(warriorB);
			assert.equal(11, attackInfo.attackeeInjury);
			assert.equal(2, attackInfo.attackeeBlood);
		});
	});

	describe('warrior attack with weapon feature: ', function() {
		it('warrior fight with a normal player, should return weapon feature damage info: ', function() {
			warriorInfo = {
				name: '张三',
				blood: 10,
				attackPoint: 9,
				career: CAREER.WARRIOR,
				weapon: WEAPON.SWORD,
				armor: ARMOR
			};
			warrior = new Warrior(warriorInfo);
			var attackInfo = warrior.attack(player);
			assert.equal(2, attackInfo.attackerWeapon.feature.damagePoint);
			assert.equal("毒性伤害", attackInfo.attackerWeapon.feature.name);
			assert.equal("中毒", attackInfo.attackerWeapon.feature.result);
		});
	});
});