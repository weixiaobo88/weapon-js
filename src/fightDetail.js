module.exports = FightDetail;

function FightDetail() {}

FightDetail.prototype.generateAttackResult = function(name) {
	return name + "被打败了";
}

FightDetail.prototype.generateAttackMsg = function(attackInfo) {
	var useWeapon = "";
	var attackerCareer = "";
	var attackeeCareer = "";
	if (attackInfo.attackerWeapon) {
		useWeapon = "用" + attackInfo.attackerWeapon.name;
	};
	if (attackInfo.attackerCareer) {
		attackerCareer = attackInfo.attackerCareer;
	};
	if (attackInfo.attackeeCareer) {
		attackeeCareer = attackInfo.attackeeCareer;
	};

	var part1, part2, part3;
	part1 = attackerCareer + attackInfo.attacker + useWeapon + "攻击了" + attackeeCareer + attackInfo.attackee + ",";
	part2 = attackInfo.attackee + "受到了" + attackInfo.attackeeInjury + "点伤害,";
	part3 = attackInfo.attackee + "剩余生命：" + attackInfo.attackeeBlood;

	var attackMsg = part1 + part2 + part3;
	return attackMsg;
}