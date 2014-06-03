module.exports = FightDetail;

function FightDetail() {}

FightDetail.prototype.generateAttackResult = function(name) {
	return name + "被打败了";
}

FightDetail.prototype.generateAttackMsg = function(attackInfo) {
	var attackMsg = attackInfo.attacker + "攻击了" + attackInfo.attackee + "," +
		attackInfo.attackee + "受到了" + attackInfo.injury + "点伤害," +
		attackInfo.attackee + "剩余生命：" + attackInfo.blood;

	return attackMsg;
}

FightDetail.prototype.generateAttackMsgWithCareer = function(attackInfo) {
	var useWeapon = "";
	if (attackInfo.attackerWeapon) {
		useWeapon = "用" + attackInfo.attackerWeapon.name;
	};
	var attackMsg = attackInfo.attackerCareer + attackInfo.attacker + useWeapon + "攻击了" + attackInfo.attackeeCareer + attackInfo.attackee + "," +
		attackInfo.attackee + "受到了" + attackInfo.injury + "点伤害," +
		attackInfo.attackee + "剩余生命：" + attackInfo.blood;

	return attackMsg;
}