module.exports = Game;
var Player = require("../src/player.js");
var FightDetail = require("../src/fightDetail.js");

function Game() {}

var printer = function(msg) {
	console.log(msg);
};

function Game(playerA, playerB) {
	this._playerA = playerA;
	this._playerB = playerB;
}

Game.prototype.start = function() {
	var playerA, playerB, attackInfo, attackMsg, attackResult, fightDetail;

	playerA = this._playerA;
	playerB = this._playerB;
	fightDetail = new FightDetail();

	while (playerA.alive() && playerB.alive()) {
		if (playerA.alive()) {
			attackInfo = playerA.attack(playerB);
			this.handleAttack(playerB, playerA, attackInfo);
		}
		if (playerB.alive()) {
			attackInfo = playerB.attack(playerA);
			this.handleAttack(playerA, playerB, attackInfo);
		}
	}

	attackResult = fightDetail.generateAttackResult(attackInfo.attackeeBlood > 0 ? attackInfo.attacker : attackInfo.attackee);
	printer(attackResult);
}

Game.prototype.handleAttack = function(attackee, attacker, attackInfo) {
	var fightDetail = new FightDetail();

	var attackMsg = fightDetail.generateAttackMsg(attackInfo);
	printer(attackMsg);

	if (this.isToTriggerFeature()) {
		if (typeof attackInfo.attackerWeapon != 'undefined' && typeof attackInfo.attackerWeapon.feature != 'undefined') {
			attackInfo.attackeeBlood = attackee.injuredByFeatureDamage(attacker);

			var featureDamageMsg = fightDetail.generateFeatureDamageMsg(attackInfo);

			printer(featureDamageMsg);
		};
	};
}

Game.prototype.isToTriggerFeature = function() {
	return Math.round(Math.random());
}