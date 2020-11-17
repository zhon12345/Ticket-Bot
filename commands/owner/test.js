/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'test',
	category: 'Owner',
	description: 'Checks if the bot is working.',
	aliases: [],
	usage: 'test',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setTitle('I am working!')
			.setColor('BLUE')
			.setImage('https://media.giphy.com/media/gw3IWyGkC0rsazTi/200.gif');
		message.channel.send(embed);
	},
};