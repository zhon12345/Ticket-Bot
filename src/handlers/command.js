const path = require("node:path");
const { loadModules } = require("../utils/loaders");

module.exports = async (client) => {
	console.log("Loading commands...");

	const commandFolders = path.join(__dirname, "..", "commands");
	const commands = await loadModules(commandFolders, {
		validate: (module, filePath) => {
			const valid = "data" in module && "run" in module;
			if (!valid) {
				console.warn(`[WARNING] The command at ${filePath} is missing a required "data" or "run" property.`);
			}
			return valid;
		},
	});

	for (const command of commands) {
		client.commands.set(command.data.name, command);
	}

	console.log(`Successfully loaded ${client.commands.size} commands!`);
};
