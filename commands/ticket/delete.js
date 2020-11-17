const fetch = require('node-fetch');
const url = 'https://hasteb.in/documents';
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: "delete",
	category: "Ticket",
	description: "Delete a specified ticket.",
	aliases: [],
	usage: "close",
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args) => {
		if(message.channel.name.includes("ticket-")) {
			message.channel.delete()
		} 
		else {
			return message.reply('you cannot use this command here. Please use this command when you want to delete a ticket.')
		}
	},
};