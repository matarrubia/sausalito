function Background() {
}

Background.prototype.draw = function(context) {
	context.fillStyle = '#000';
	context.fillRect(0, 0, game.width, game.height);

	context.fillStyle = '#fff';
	context.font = '40px monospace';
	context.fillText(game.player.score, game.width * 0.375, 50);
	context.fillText(game.bot.score, game.width * 0.625, 50);
}