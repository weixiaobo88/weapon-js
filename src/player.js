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
}

var Visitor = {};
Visitor.fightResult = function() {
	return arguments[0].getName() + '被打败了';
}

Player.prototype.fight = function(playerB) {
	var playerA = this;
	var bloodOfA = playerA.getBlood(),
		bloodOfB = playerB.getBlood(),
		fightResult = Visitor.fightResult;

	while (bloodOfA > 0 && bloodOfB > 0) {
		bloodOfA -= playerB.getAttack();
		bloodOfB -= playerA.getAttack();

		if (bloodOfA <= 0 && bloodOfA < bloodOfB) {
			fightResult = fightResult(playerA);
		};
		if (bloodOfB <= 0 && bloodOfB < bloodOfA) {
			fightResult = fightResult(playerB);
		};
	}

	console.log(fightResult);
	return fightResult;
}