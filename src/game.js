module.exports = Game;
var Player = require("../src/player.js");
var FightDetail = require("../src/fightDetail.js");

function Game() {}

var printer = function(msg) {
	console.log(msg);
};

function Game(playerAInfo, playerBInfo) {
	this._playerAInfo = playerAInfo;
	this._playerBInfo = playerBInfo;
	this._playerA = new Player(playerAInfo);
	this._playerB = new Player(playerBInfo);
}

Game.prototype.start = function() {
	var playerA, playerB, attackInfo, attackMsg, attackResult, fightDetail;

	playerA = this._playerA;
	playerB = this._playerB;
	fightDetail = new FightDetail();

	while (playerA.alive() && playerB.alive()) {
		if (playerA.alive()) {
			attackInfo = playerA.attack(playerB);
		}
		if (playerB.alive()) {
			attackInfo = playerB.attack(playerA);
		}
		attackMsg = fightDetail.generateAttackMsg(attackInfo);
		printer(attackMsg);
	}

	attackResult = fightDetail.generateAttackResult(playerA.alive() ? this._playerBInfo.name : this._playerAInfo.name);
	printer(attackResult);
}