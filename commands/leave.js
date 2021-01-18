const { execute } = require("./play");

module.exports = {
    name: `leave`,
    description: `stop the bot and leave the channel`,
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send(`Moras biti u voice channelu da mi mozes rec da leavam`);
        await voiceChannel.leave();
        await message.channel.send(`Leaveam channel`);
    }
}