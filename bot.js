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

client.user.setGame(`FoX Security`,"http://twitch.tv/S-F")

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

 ❖ !invite

==================================================================

Server support: https://discord.gg/TeJQeuW

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=605680873190326275&permissions=8&scope=bot

==================================================================**


`);

    }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "invite")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("تم ارسالك في الخاص")
   .setFooter("اسم سيرفرك ",'رابط صوره سيرفرك')
                   .setTimestamp()
				message.channel.send('**Done ✅**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`  **${msg.guild.name}**`)
      .addField(':globe_with_meridians:** Site Server**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ Member__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ Member Online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Channel Text__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ Channel Voice__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ OwnerShip__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ID Server__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ Create a server__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on("message", msg => {
  if(msg.content === '!' + "user") {
      const embed = new Discord.RichEmbed();
  embed.addField("Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('Created User', `${msg.createdAt}`,true)
      msg.channel.send({embed: embed})
  }
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('message', message=>{
    if (message.content ==='color'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }
    if (message.content === 'decolor'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.roles.find('name', x)
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }

})


client.login(process.env.BOT_TOKEN);
