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


client.on("message", async message => {
    if(message.content.startsWith(prefix + "banlist")) {
        if(!message.guild) return;
                if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `BAN_MEMBERS`' );
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**`${b}` | ${bb}**`);
        });
    }
});


client.login(process.env.BOT_TOKEN);
