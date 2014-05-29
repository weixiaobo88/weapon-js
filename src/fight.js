module.exports = Fight;

function Fight() {

}

Fight.prototype.start = function(playerA, playerB) {
	var bloodOfA = playerA.getBlood(),
		bloodOfB = playerB.getBlood(),
		fightResult = '',
		failedMsg = '被打败了';

	while (bloodOfA > 0 && bloodOfB > 0) {
		bloodOfA -= playerB.getAttack();
		bloodOfB -= playerA.getAttack();

		if (bloodOfA <= 0 && bloodOfA < bloodOfB) {
			fightResult = playerA.getName() + failedMsg;
		};
		if (bloodOfB <= 0 && bloodOfB < bloodOfA) {
			fightResult = playerB.getName() + failedMsg;
		};
	}

	console.log(fightResult);
	return fightResult;
}