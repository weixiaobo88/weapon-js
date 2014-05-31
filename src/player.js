module.exports = Player;

function Player() {

}

function Player(playerInfo) {
	this._name = playerInfo.name;
	this._blood = playerInfo.blood;
	this._attack = playerInfo.attack;
}

Player.prototype.attack = function(player) {
	this._blood = player._blood - this._attack;
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