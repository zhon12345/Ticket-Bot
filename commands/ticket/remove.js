module.exports = {
	name: 'remove',
	category: 'Ticket',
	description: 'Removes a member to a specified ticket.',
	aliases: [],
	usage: 'remove <member>',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args) => {
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
		if(message.channel.name.includes('ticket-')) {
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
				}).then(() => {
					message.channel.send(`Successfully removed ${member} from ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('An error occured, please try again!');
			}
		}
	},
};