const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function()
{
	console.log("Je suis connecté !")
	bot.user.setPresence({
		game: {
			name: 'HelloKitty Online',
			type: 0
		}
	});
});

bot.login('NDU4NjI5NzQzODgxNzQ4NDgw.DgqhSA.KSct8tZCV-nAWR7PnqlYeELlkRk')

bot.on('message', message =>
{
	if (message.content === 'Chaton')
	{
		message.reply("I <3 Cats !!!")
	}
})

bot.on('guildMemberAdd', member => 
{
	member.createDM().then(channel =>
	{
		return channel.send('Bonjour et bienvenue sur mon serveur ' + member.displayName)
	}).catch(console.error)
})