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

client.user.setGame(`System Fox`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**Done ✅**');
            
	
		 


 message.author.sendMessage(`
 **

                  Prefix = ' ! '


 ❖  !avatar 
 
 ❖  !id 

 ❖ !clear
 
 ❖ !sug

 ❖ !mute

 ❖ !unmute
  
 ❖ !member

 ❖ !server

 ❖ !support

==================================================================

Server support: https://discord.gg/TeJQeuW

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=605680873190326275&permissions=8&scope=bot

==================================================================**


`);

    }
});


client.login(process.env.BOT_TOKEN);
