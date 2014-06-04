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
			attackMsg = fightDetail.generateAttackMsg(attackInfo);
			printer(attackMsg);
		}
		if (playerB.alive()) {
			attackInfo = playerB.attack(playerA);
			attackMsg = fightDetail.generateAttackMsg(attackInfo);
			printer(attackMsg);
		}
	}

	attackResult = fightDetail.generateAttackResult(playerA.alive() ? attackInfo.attackee : attackInfo.attacker);
	printer(attackResult);
}