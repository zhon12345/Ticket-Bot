const { readdir, stat } = require("node:fs/promises");
const path = require("node:path");

async function loadModules(dir, { recursive = true, validate } = {}) {
	const statDir = await stat(dir);
	if (!statDir.isDirectory()) {
		throw new Error(`Expected a directory, but got: ${dir}`);
	}

	const files = await readdir(dir);
	const modules = [];

	for (const file of files) {
		const filePath = path.join(dir, file);
		const statFile = await stat(filePath);

		if (statFile.isDirectory() && recursive) {
			modules.push(...(await loadModules(filePath, { recursive, validate })));
			continue;
		}

		if (!file.endsWith(".js")) continue;

		const mod = require(filePath);
		if (!validate || validate(mod, filePath)) {
			modules.push(mod);
		}
	}
	return modules;
}

module.exports = {
	loadModules,
};
