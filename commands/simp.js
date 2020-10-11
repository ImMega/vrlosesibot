module.exports = {
    name: "simp", 
    description: "Koliki si simp" ,
    execute(message, args){
        message.reply('ti si ' + Math.floor(Math.random() * 100) + '% simp!');
    }
}