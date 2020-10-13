const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: "help", 
    description: "help" ,
    execute(message, args){
        const helpEmbed = new Discord.RichEmbed()
            .setColor(0x6509ed)
            .setTitle(`Podrzane komande`)
            .setDescription(`${prefix} ` + commands.map(c => c.name).join(`\n${prefix} `))
            .setAuthor(message.author.username)
            .setField(`To su te komande!`)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`Da, to su te komande!`)
            .setTimestamp()
        try {
            message.channel.sendEmbed(helpEmbed);
        } catch {
            message.reply(`Nesto ne radi`)
        }
    }
}