module.exports = Player;

function Player() {

}

function Player(playerInfo) {
	var name = playerInfo.name,
		blood = playerInfo.blood,
		attack = playerInfo.attack;

	this.getName = function() {
		return name;
	}
	this.getBlood = function() {
		return blood;
	}
	this.getAttack = function() {
		return attack;
	}

	this.attack = function(player) {
		blood = player.getBlood() - this.getAttack();
	}
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
	if (this.getBlood() > 0) {
		return true;
	};
	return false;
}