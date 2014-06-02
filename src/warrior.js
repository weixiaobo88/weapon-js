module.exports = Warrior;
var Player = require("../Player.js");

function inherit(subClass, superClass) {
	subClass.prototype = new superClass();
	subClass.prototype.superConstructor = superClass;
	subClass.prototype.constructor = subClass;
}

inherit(Warrior, Player);

function Warrior() {
	this.superConstructor.call(this);

	this.
}