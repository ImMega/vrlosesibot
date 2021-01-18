const ytdl = require(`ytdl-core`);
const ytSearch = require(`yt-search`);

module.exports = {
    name: `play`,
    description: `Joins and plays a video from YouTube`, 
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send(`Da mozes cuti sto ja pustam moras biti u voice channelu pametni`);
        if (!args.length) return message.channel.send(`A da napises uz to sto da pustim`);

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(``));

        if(video){
            const stream = ytdl(video.url, {filter: `audioonly`});
            connection.play(stream, {seek: 0, volume: 0.7})
            .on(`finish`, () =>{
                voiceChannel.leave();
            });

            await message.reply(`Now Playing ***${video.title}***`)
        } else {
            message.channel.send(`Nisam uspio pronaci video`);
        }
    }
}