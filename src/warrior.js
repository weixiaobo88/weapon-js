module.exports = Warrior;
var Player = require("../src/Player.js");

var inherits = function(child, superCls) {
	var _super = function() {};
	_super.prototype = superCls.prototype;
	child.prototype = new _super();
};

inherits(Warrior, Player);

function Warrior(playerInfo) {
	Player.call(this, playerInfo);
	this._weapon = playerInfo.weapon;
	this._armor = playerInfo.armor;
}

Warrior.prototype.attack = function(player) {
	var armorDefense = 0;
	if (typeof player._armor != 'undefined') {
		armorDefense = player._armor.defense;
	};
	player._blood -= this._attackPoint + this._weapon.attackPoint - armorDefense;

	return {
		attacker: this._name,
		attackee: player._name,
		attackeeInjury: this._attackPoint + this._weapon.attackPoint,
		attackeeBlood: player._blood,
		attackerCareer: this._career,
		attackeeCareer: player._career,
		attackerWeapon: this._weapon
	};
}