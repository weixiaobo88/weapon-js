module.exports = Player;

function Player() {}

function Player(playerInfo) {
	this._name = playerInfo.name;
	this._blood = playerInfo.blood;
	this._attackPoint = playerInfo.attackPoint;
}

Player.prototype.attack = function(player) {
	player._blood -= this._attackPoint;

	return {
		attacker: this._name,
		attackee: player._name,
		injury: this._attackPoint,
		blood: player._blood
	};
}

Player.prototype.alive = function() {
	if (this._blood > 0) {
		return true;
	};
	return false;
}