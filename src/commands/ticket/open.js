module.exports = {
	name: "open",
	category: "Ticket",
	description: "Re-opens a ticket.",
	aliases: [],
	usage: "open",
	userperms: ["ADMINISTRATOR"],
	botperms: [],
	run: async (client, message) => {
		if (message.channel.name.includes("ticket-")) {
			const member = message.guild.members.cache.get(message.channel.name.split("ticket-").join(""));
			try {
				message.channel
					.updateOverwrite(member.user, {
						VIEW_CHANNEL: true,
						SEND_MESSAGES: true,
						ATTACH_FILES: true,
						READ_MESSAGE_HISTORY: true,
					})
					.then(() => {
						message.channel.send(`Successfully re-opened ${message.channel}`);
					});
			} catch {
				return message.channel.send("An error occurred, please try again!");
			}
		} else {
			return message.reply("you cannot use this command here. Please use this command on a closed ticket.");
		}
	},
};
