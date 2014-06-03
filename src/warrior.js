module.exports = Warrior;
var Player = require("../src/Player.js");

function inherit(subClass, superClass) {
	subClass.prototype = new superClass;
	subClass.prototype.constructor = subClass;
	subClass.prototype.superConstructor = superClass;
	subClass.prototype._super = superClass.prototype;
}

function Warrior(playerInfo) {
	console.log(playerInfo);
	this.superConstructor.call(this, playerInfo);
}

inherit(Warrior, Player);