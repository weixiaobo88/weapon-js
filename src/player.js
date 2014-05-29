module.exports = Player;

function Player() {

}

function Player(playerInfo) {
	this.name = playerInfo.name;
	this.blood = playerInfo.blood;
	this.attack = playerInfo.attack;
}

Player.prototype.getName = function() {
	return this.name;
}

Player.prototype.getBlood = function() {
	return this.blood;
}

Player.prototype.getAttack = function() {
	return this.attack;
}