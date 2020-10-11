module.exports = {
    name: "ppsize", 
    description: "Velicina malog" ,
    execute(message, args){
        message.reply('ti imas ' + Math.floor(Math.random() * 50) + 'inch velikog!');
    }
}