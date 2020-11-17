module.exports = {
	name: 'add',
	category: 'Ticket',
	description: 'Adds a member to a specified ticket.',
	aliases: [],
	usage: 'add <member>',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args) => {
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
		if(message.channel.name.includes('ticket-')) {
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`Successfully added ${member} to ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('An error occured, please try again!');
			}
		}
	},
};