const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : i1Suhaib`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`D4`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on('message', message =>{//ping
if(message.content.startsWith(prefix  +  'ping'))  {
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`
Discord API: ${client.ping.toFixed(0)} ms`);
  });
  }
});


client.login(process.env.BOT_TOKEN);
