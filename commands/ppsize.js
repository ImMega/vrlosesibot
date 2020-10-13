module.exports = {
    name: "ppsize", 
    description: "Velicina malog" ,
    execute(message, args){
        const target = message.mentions.users.first()
        if (!target){
            message.reply('ti imas ' + Math.floor(Math.random() * 50) + 'inch velikog!');
        } else if (target){
            message.channel.send(`${target} ima` + " " + Math.floor(Math.random() * 50) + 'inch velikog!');
        }
    }
}