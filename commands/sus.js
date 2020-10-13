module.exports = {
    name: "sus", 
    description: "Crveni je sus" ,
    execute(message, args){
        number = 12;
        colorNum = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if (colorNum === 1){
            message.channel.send("Crveni je sus");
        } else if (colorNum === 2){
            message.channel.send("Plavi je sus");
        } else if (colorNum === 3){
            message.channel.send("Zeleni je sus");
        } else if (colorNum === 4){
            message.channel.send("Rozi je sus");
        } else if (colorNum === 5){
            message.channel.send("Narančasti je sus");
        } else if (colorNum === 6){
            message.channel.send("Žuti je sus");
        } else if (colorNum === 7){
            message.channel.send("Crni je sus");
        } else if (colorNum === 8){
            message.channel.send("Bijeli je sus");
        } else if (colorNum === 9){
            message.channel.send("Ljubičasti je sus");
        } else if (colorNum === 10){
            message.channel.send("Smeđi je sus");
        } else if (colorNum === 11){
            message.channel.send("Cyan je sus");
        } else if (colorNum ===12){
            message.channel.send("Lime je sus");
        }
    }
}