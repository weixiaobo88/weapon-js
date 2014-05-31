module.exports = Game;
var Player = require("../src/player.js");

function Game() {}


var printer = function(name) {
	console.log(name + '被打败了');
}


Game.prototype.start = function() {
	var playerA, playerB;
	var playerAInfo = {
		name: '张三',
		blood: 100,
		attack: 9
	},
		playerBInfo = {
			name: '李四',
			blood: 100,
			attack: 8
		};
	playerA = new Player(playerAInfo);
	playerB = new Player(playerBInfo);

	while (playerA.alive() && playerB.alive()) {
		playerA.fight(playerB);
	}

	printer(playerA.alive() ? playerBInfo.name : playerAInfo.name);
}