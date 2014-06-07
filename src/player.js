module.exports = Player;

function Player() {}

function Player(playerInfo) {
	this._name = playerInfo.name;
	this._blood = playerInfo.blood;
	this._attackPoint = playerInfo.attackPoint;
	this._career = playerInfo.career;
}

Player.prototype.attack = function(player) {
	var armorDefense = 0;
	if (typeof player._armor != 'undefined') {
		armorDefense = player._armor.defense;
	};
	player._blood -= this._attackPoint - armorDefense;

	return {
		attacker: this._name,
		attackee: player._name,
		attackeeInjury: this._attackPoint - armorDefense,
		attackeeBlood: player._blood,
		attackerCareer: this._career,
		attackeeCareer: player._career
	};
}

Player.prototype.alive = function() {
	if (this._blood > 0) {
		return true;
	};
	return false;
}

Player.prototype.injuredByFeatureDamage = function(player) {
	this._blood -= player._weapon.feature.damagePoint;
	return this._blood;
}