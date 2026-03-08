const path = require("node:path");
const { loadModules } = require("../utils/loaders");

module.exports = async (client) => {
	const eventFolder = path.join(__dirname, "..", "events");
	const events = await loadModules(eventFolder, {
		validate: (module, filePath) => {
			const valid = "name" in module && "run" in module;
			if (!valid) {
				console.warn(`[WARNING] The event at ${filePath} is missing a required "name" or "run" property.`);
			}
			return valid;
		},
	});

	for (const event of events) {
		client[event.once ? "once" : "on"](event.name, (...args) => event.run(...args));
	}
};
