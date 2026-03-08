const keepAlive = require("./server");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.commands = new Collection();
client.aliases = new Collection();

["command", "event"].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

keepAlive();
client.login(process.env.BOT_TOKEN);
