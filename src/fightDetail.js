module.exports = FightDetail;

function FightDetail() {}

FightDetail.prototype.generateAttackResult = function(name) {
	return name + "被打败了";
}

FightDetail.prototype.generateAttackMsg = function(attackInfo) {
	var useWeapon = "";
	var attackerCareer = "";
	var attackeeCareer = "";
	var featureDamage = "";

	if (attackInfo.attackerWeapon) {
		useWeapon = "用" + attackInfo.attackerWeapon.name;
	};
	if (attackInfo.attackerCareer) {
		attackerCareer = attackInfo.attackerCareer;
	};
	if (attackInfo.attackeeCareer) {
		attackeeCareer = attackInfo.attackeeCareer;
	};

	var part1, part2, part3, part4;
	part1 = attackerCareer + attackInfo.attacker + useWeapon + "攻击了" + attackeeCareer + attackInfo.attackee + ",";
	part2 = attackInfo.attackee + "受到了" + attackInfo.attackeeInjury + "点伤害,";
	part3 = attackInfo.attackee + "剩余生命：" + attackInfo.attackeeBlood;

	var attackMsg = part1 + part2 + part3;

	if (attackInfo.attackerWeapon && attackInfo.attackerWeapon.feature) {
		featureDamage = attackInfo.attackerWeapon.feature.result;
		part4 = attackInfo.attackee + featureDamage + "了,";
		attackMsg = part1 + part2 + part4 + part3;
	};

	return attackMsg;
}

FightDetail.prototype.generateFeatureDamageMsg = function(attackInfo) {
	var featureDamageMsg = attackInfo.attackee + "受到" + attackInfo.attackerWeapon.feature.damagePoint + "点" + attackInfo.attackerWeapon.feature.name + "," + attackInfo.attackee + "剩余生命：" + attackInfo.attackeeBlood;
	return featureDamageMsg;
}