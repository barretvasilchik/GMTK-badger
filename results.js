//HARDCODED IT IN BECAUSE OF STUPID XSS PROTECTIONS
function loadGameJamData() {
	var data = {};
	var names = [];
	for (var game of raw.results) {
		data[game.id] = game;
		names.push({"name": game.title, "id": game.id});
	}
	return {"games": data, "names":names};
}