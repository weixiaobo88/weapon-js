var WEAPON = {
	STICK: {
		name: "优质木棒",
		attackPoint: 2
	},
	SWORD: {
		name: "优质毒剑",
		attackPoint: 4,
		feature: {
			name: "毒性伤害",
			damagePoint: 2,
			result: "中毒"
		}
	},
	FIRE: {
		name: "火焰剑",
		attackPoint: 3,
		feature: {
			name: "火焰伤害",
			damagePoint: 1,
			result: "着火"
		}
	},
	FROST: {
		name: "寒冰剑",
		attackPoint: 3,
		feature: {
			name: "冰冻伤害",
			damage: "每两轮无法攻击一轮",
			result: "冻僵"
		}
	},
	STUN: {
		name: "晕锤",
		attackPoint: 2,
		feature: {
			name: "眩晕",
			damage: "两轮无法攻击",
			result: "晕倒"
		}
	}
};

module.exports = WEAPON;