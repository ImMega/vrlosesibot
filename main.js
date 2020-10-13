const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "-";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync ("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once("ready", () => {
    console.log("vRlO sEsi Lik is online");
});

client.on("ready", () => {
    client.user.setActivity(`PREFIX -`, { type: `LISTENING`});
});

client.on("message", message =>{
     if (message.content === "jebem ti mater") {
          message.reply("i ja tebi isto!");
     }

     if (message.content === "So you are crewmate? Name every task") {
        message.channel.send([
            "Upper Engine: Align Engine Output",
            "Lower Engine: Align Engine Output",
            "Electrical: Calibrate Distributor",
            "O2: Clean O2 Filter",
            "Weapons: Clear Asteroids",
            "Admin: Fix Wiring",
            "Cafeteria: Fix Wiring",
            "Electrical: Fix Wiring",
            "Navigation: Fix Wiring",
            "Securiy: Fix Wiring",
            "Storage: Fix Wiring",
            "Storage: Fuel Engines",
            "Upper Engine: Fuel Engines",
            "Lower Engine: Fuel Engines",
            "MedBay: Inspect Sample",
            "Shields: Prime Shields",
            "Navigation: Stabilize Steering",
            "Reactor: Start Reactor",
            "MedBay: Submit Scan",
            "Admin: Swipe Card",
            "Reactor: Unlock Manifolds",
            "Upper Engine: Upload Data",
            "Lower Engine: Upload Data"
        ]);
    }

     if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

   if(command === "picka"){
          client.commands.get("picka").execute(message, args);
      } else if(command === "lmao"){
          client.commands.get("lmao").execute(message, args);
      } else if(command === "sus"){
          client.commands.get("sus").execute(message, args);
      } else if(command === "simp"){
          client.commands.get("simp").execute(message, args);
      } else if(command === "ppsize"){
          client.commands.get("ppsize").execute(message, args);
      } else if(command === "help"){
        const helpEmbed = new Discord.RichEmbed()
            .setColor(0x6509ed)
            .setTitle(`Podrzane komande`)
            .setDescription(`${prefix} ` + commandFiles.map(c => c.name).join(`\n${prefix} `))
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
});




 
client.login(process.env.token);
