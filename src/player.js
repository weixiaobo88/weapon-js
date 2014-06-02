module.exports = Player;

function Player() {

}

var CAREER = {
	NORMAL: "normal",
	WARRIOR: "warrior"
};

function Player(playerInfo) {
	this._name = playerInfo.name;
	this._blood = playerInfo.blood;
	this._attack = playerInfo.attack;
	this._career = "normal";
}

var printAttack = function(attackMsg) {
	console.log(attackMsg.attacker + "攻击了" + attackMsg.attackee + "," +
		attackMsg.attackee + "受到了" + attackMsg.injury + "点伤害," +
		attackMsg.attackee + "剩余生命：" + attackMsg.blood);
}

Player.prototype.attack = function(player) {
	player._blood -= this._attack;

	var attackMsg = {
		attacker: this._name,
		attackee: player._name,
		injury: this._attack,
		blood: player._blood
	};

	printAttack(attackMsg);
}

Player.prototype.fight = function(playerB) {
	var playerA = this;

	if (playerA.alive()) {
		playerA.attack(playerB);
	}
	if (playerB.alive()) {
		playerB.attack(playerA);
	}
}

Player.prototype.alive = function() {
	if (this._blood > 0) {
		return true;
	};
	return false;
}