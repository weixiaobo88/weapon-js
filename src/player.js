module.exports = Player;

function Player() {}

function Player(playerInfo) {
	this._name = playerInfo.name;
	this._blood = playerInfo.blood;
	this._attackPoint = playerInfo.attackPoint;
	this._career = playerInfo.career;
}

Player.prototype.attack = function(player) {
	player._blood -= this._attackPoint;

	return {
		attacker: this._name,
		attackee: player._name,
		injury: this._attackPoint,
		blood: player._blood,
		attackerCareer: this._career,
		attackeeCareer: player._career,
		attackerWeapon: this._weapon
	};
}

Player.prototype.alive = function() {
	if (this._blood > 0) {
		return true;
	};
	return false;
}