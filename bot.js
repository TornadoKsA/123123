
const pretty = require("pretty-ms");
const Discord = require("discord.js");
const moment = require('moment');
const client = new Discord.Client();
const bot = new Discord.Client();
const hero = client;
const fs = require("fs");
const ms = require("ms");
const prefix = "!"

client.on('message', message => {
if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
     var heg;
     if(men) {
        heg = men
     } else {
        heg = message.author
     }
     var mentionned = message.mentions.members.first();
     var h;
     if(mentionned) {
        h = mentionned
     } else {
        h = message.member
     }
           moment.locale('ar-TN');
     
     var guild = message.guild
     let inviteandstuff = undefined;
     var nul = 0;
     if (inviteandstuff === undefined) {
         inviteandstuff = "";
       }
      guild.fetchInvites()
       .then(invites => {
        invites.forEach(invite => {
           if (invite.inviter === heg) {
             inviteandstuff=invite.inviter
                nul+=invite.uses
               }
             });

               var id = new  Discord.RichEmbed()
     .setColor("#707070")
     .addField(': تاريخ دخولك للديسكورد', `${moment(heg.createdTimestamp).format('`D/M/YYYY HH:mm`')} **\n** \**${moment(heg.createdTimestamp).fromNow()}\**` ,true) 
     .addField(': تاريخ دخولك لسيرفرنا', `${moment(h.joinedAt).format('`D/M/YYYY HH:mm`')} \n \**${moment(h.joinedAt).fromNow()}\**`, true)               
     .addField(': عدد الدعوات', `**${nul}**`, true)        
     .addField('تم دعوتك بواسطة', `**${inviteandstuff}**`)
     .setThumbnail(heg.avatarURL);
     message.channel.send(id)
 });
     
     }


const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "$"
bot.on('message', msg => {
  if(msg.author.bot) return
  if(msg.content.startsWith(prefix + 'role')) {
  let params = msg.content.slice(prefix.length).trim().split(/ +/g);
  if(!params[0]) return msg.channel.send(`**syntax: ${prefix}role <all/humans/bots/@user> <name role/@role>`);
if(params[0] === 'all') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role all <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
 msg.guild.members.forEach(m => {
if(m.roles.some(r => r.id == role.id)) return
     m.addRole(role)
 })
 msg.channel.send(`**done give all role @${role.name}**`);
} else if(params[0] === 'bots') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role bots <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
 let bots = msg.guild.members.filter(m => m.user.bot)
 bots.forEach(bot => {
   if(bot.roles.some(r => r.id == role.id)) return
   bot.addRole(role)
 })
 msg.channel.send(`**done give all bots role @${role.name}**`);
} else if(params[0] === 'humans') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role humans <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
   let humans = msg.guild.members.filter(m => !m.user.bot)
   humans.forEach(h => {
     if(h.roles.some(r => r.id == role.id)) return
     h.addRole(role)
   }) 
   msg.channel.send(`**done give all humans role @${role.name}**`);
}else {
     if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role @user <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
     if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
     let userID = params[0].slice(2 , -1)
     let user = msg.guild.members.get(userID)
     if(!user) return 
     user.addRole(role)
     msg.channel.send(`**Done give ${user} @${role.name}**`)

   }
 

 }


})






const shorten = require('isgd');
client.on('message', message => {
    let gl = hero.guilds.get("525365808352985088").emojis.find(r => r.name === "GlowPartner");
    if (message.content.startsWith(prefix + 'short')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) return message.channel.send(`**${gl} | الاِستخدام: $short \`LINK\`. **`)
        if (!args[1]) {
            shorten.shorten(args[0], function (res) {
                if (res.startsWith('Error:')) return message.channel.send(`**${gl} الاِستخدام: $short \`LINK\`. **`);
                message.channel.send(`**${gl} | الرابط المختصر : ${res}**`);
            })
        } else {
            shorten.custom(args[0], args[1], function (res) {
                if (res.startsWith('Error:')) return message.channel.send(`**${gl} الرابط المختصر : ${res}**`);
                message.channel.send(`**${gl} | الرابط المختصر : ${res}**`);
            })
        }
    }
});



client.on("message", message => {
    if (message.content == "$colors") {
     
          var fsn = require('fs-nextra');
          fs.readdir('./colors', async (err, files) => {
              var f = files[Math.floor(Math.random()*files.length)];
              var { Canvas } = require('canvas-constructor');
              var x =0;
              var y = 0;
              if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return replies.err(message, `**:x: | لم أجد أي لون في السيرفر . **`)
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1,b2) => b1.name - b2.name).forEach(() => {
                  x+=100;
                  if (x > 100*12) {
                      x=100;
                      y+=80;
                  }
              });
              var image = await fsn.readFile(`./colors/${f}`);
              var xd = new Canvas(100*11, y+250)
              .addBeveledImage(image, 0, 0, 100*11, y+250, 50)
              .setTextBaseline('middle')
              .setColor('white')
              .setTextSize(60)
              .addText(`علبة الألوان`, 375,40);
              x = 0;
              y = 150;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1,b2) => b1.name - b2.name).forEach(role => {
                  x+=75;
                  if (x > 100*10) {
                      x=75;
                      y+=80;
                  }
                  xd
                  .setTextBaseline('middle')
                  .setTextAlign('center')
                  .setColor(role.hexColor)
                  .addBeveledRect(x, y, 60, 60, 15)
                  .setColor('white');
                  if (`${role.name}`.length > 2) {
                      xd.setTextSize(30);
                  } else if (`${role.name}`.length > 1) {
                      xd.setTextSize(40);
                  } else {
                      xd.setTextSize(50);
                  }
                  xd.addText(role.name, x+30, y+30);
              });
              message.channel.sendFile(xd.toBuffer());
          });
    }
  })

  client.on('message', message => {
    if(message.content.startsWith(prefix + 'ping')) {
        const embed  = new RichEmbed()
        .setDescription(`**
        •  :gear: | General Command :

» =id لاضهار الايدي حقك
» =profile لاضهار البروفايل حقك
» =user لعرض معلومات الحساب
» =server معلومات عن السيرفر
» =ping سرعة اتصال البوت
» =colorlist علبة الالوان
» =emojis لرؤية ايموجيات السيرفر
» =points لاضهار النقاط
» =top لاضهار توب انفايت
» =credit يوريك كم الكريديت حقتك
» =daily يسوي لك سحب فلوس
» =giveaway لعمل قيف اوي
» =avatar لاضهار صورتك او صورة عضو اخر
» =image يعطيك صورة السيرفر
» =ban لتبنيد عضو من السيرفر
» =kick لطرد عضو من السيرفر
» =unbanall لفك الباند عن الجميع 
» =move all سحب جميع الأعضاء لرومك الصوتي
» =role @user <rank> لاعطاء رتبه لشخص
» =add.r لانشاء رتبة مع تحديد الاسم 
» =v2min لانشاء روم صوتي مؤقت لدقيقتين
» =setwelcomer <chat> لعمل ترحيب مع اختيار الشات 
» =voiceonline لعمل روم يضهرك عدد المتواجدين صوت
» =mute لاعطاء ميوت لشخص
» =unmute لفك الميوت عن شخص
» =mutechannel لتقفيل الشات
» =unmutechannel لفتح الشات
» =clear <1/100> لمسح عدد الرسائل التي تريدها
» =ccolors يسويلك الوان
» =invite لدعوة البوت
» =support لدخول سيرفر الدعم الفني

• ⊃ | Securite Command :

» =settings antispread on/off لتشغيل او اطفأ مانع النشر
» =settings limitsban لتحديد اقص الباند 
» =settings limitskick لتحديد اقصي الطرد 
» =settings limitsroleD لتحديد اقصي مسح رتب 
» =settings limitsroleC لتحديد اقصي عمل رولات 
» =settings limitschannelD لتحديد اقصي مسح رومات
» =settings limitstime لتحديد الوقت لنزع الرتبه من الهكر
» =settings antifake لمن دخول الحسبات الوهميه 
» =settings Setfake لتحديد مده الحساب الوهمي
» =settings antijoin لتبند العضو الوهمي بدون عدد الايام

•  :notes: | Music Command :

» =play لتشغيل الموسيقى
» =stop لتوقيف الموسيقى
» =skip للتخطي
» =vol لتحديد قوة الصوت
» =radio [1 - 4] طريقه تشغيل الراديو

•  :video_game: | Games Command :

» =Proverbs امثال
» =Flags اعلام
» =Gas الغاز
» =Questions اسئله عامه
» =Capitals عواصم
» =Dismantling تفكيك
**`)
    }
  });


  client.on('message', message => {
    if(message.content.startsWith(prefix + 'ping')) {
     message.channel.send(`Bot ping: **${Math.round(client.ping)}**.`)
    }
  });


  client.on('message', message => {
    var prefix = "$" // البريفكس
    if(message.content.startsWith(prefix +"server")){ // الامر
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
    if(!message.channel.guild) return message.reply(' ');
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 Server ID:**", message.guild.id,true)
    .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
    .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
    .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
    .addField("**🌍 Others **" , message.guild.region,true)
    .addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
    .setColor('#000000')
    message.channel.sendEmbed(embed)
     
    }
    });
    


var cooldown = new Set();
var points = {};
client.on('message', async message => {
	if(message.channel.type !== 'text') return;
	
	
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id == args[1]));
	  const embed  = new RichEmbed()
.setDescription(`
**لم يتم تسجيل أي نقطة حتى الأن **
** أمثلة للأوامر: **
**:small_orange_diamond:** $points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** $points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** $points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** $points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** $points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
  const error  = new RichEmbed()
.setDescription(`
**:x: يجب كتابة الأمر بشكل صحيح. **
** أمثلة للأوامر: **
**:small_orange_diamond:** $points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** $points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** $points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** $points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** $points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
if(command == prefix + 'points') {
	 
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!args[1]) {
			if(!points) return message.channel.send(embed);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return message.channel.send(embed);
			var x = 1;
			let pointsTop = new RichEmbed()
			.setAuthor('Points:')
			.setColor('#FBFBFB')
			.setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:small_blue_diamond:** <@${m.id}> \`${m.points}\``).join('\n'))
			.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
			message.channel.send({
				embed: pointsTop
			});
		}else if(args[1] == 'reset') {
			let pointsReset = new RichEmbed()
			.setDescription('**reseted all points. :white_check_mark:**')
			.setFooter('Requested by '+message.author.username, message.author.avatarURL)
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points) return message.channel.send(pointsReset);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return message.channel.send(pointsReset);
			points = {};
			message.channel.send(pointsReset);
		}else if(userM) {
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points[userM.user.id]) points[userM.user.id] = {
				points: 0,
				id: userM.user.id
			};
			if(!args[2]) {
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.username} Not have any points.`);
				var userPoints = new RichEmbed()
				.setColor('#d3c325')
				.setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
				message.channel.send({
					embed: userPoints
				});
			}else if(args[2] == 'reset') {
				if(points[userM.user.id].points == 0) return message.channel.send(error);
				points[userM.user.id].points = 0;
				message.channel.send(`Successfully reset ${userM.user.username} points.`);
			}else if(args[2].startsWith('+')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 1000000) return message.channel.send(error);
				if(!args[2]) return message.channel.send(error);
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
				points[userM.user.id].points += args[2];
				let add = new RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(add);
			}else if(args[2].startsWith('-')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 0) return message.channel.send(error);
				if(!args[2]) return message.channel.send(error);
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
				points[userM.user.id].points -= args[2];
					let rem = new RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(rem);
			}else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
				args[2] = parseInt(Math.floor(args[2]));
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if(points[userM.user.id].points == args[2]) return err(message, `${userM.user.username} points is already ${args[2]}.`);
				points[userM.user.id].points = args[2];
					let set = new RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(set);
			}
			}
			}
});






const {
    readFile,
    readFileSync
} = require('fs-nextra');

const cnvs = require("canvas");
const {
    get
} = require('snekfetch');

let inv = JSON.parse(fs.readFileSync("./userD.json", "UTF8"))

const invs = JSON.parse(fs.readFileSync("./invites.json", "UTF8"))

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
    wait(1000);

    client.guilds.forEach(g => {
        if (g.members.get(client.user.id).hasPermission("MANAGE_GUILD"))
            g.fetchInvites().then(guildInvites => {
                invs[g.id] = guildInvites;
            });
    });
});

client.on('guildMemberAdd', member => {
    member.guild.fetchInvites().then(guildInvites => {
        const ei = invs[member.guild.id];
        invs[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        const inviter = client.users.get(invite.inviter.id);
        inv[member.user.id + member.guild.id].inviter = invite.inviter.id;
        fs.writeFile("./invites.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
    });
});

client.on('message', async message => {
    if (message.content.startsWith(prefix + "id")) {
        let mem = message.mentions.members.first() || message.member;
        let auth = message.mentions.users.first() || message.author;
        const imageUrlRegex = /\?size=2048$/g;
        const name = mem.displayName.length > 10 ? mem.displayName.substring(0, 11) + "..." : mem.displayName;

        const {
            body: ava
        } = await get(auth.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

        const img = await readFile("./id_1.png");
        const millis = new Date().getTime() - auth.createdAt.getTime();
        const now = new Date();
        const createdAt = millis / 1000 / 60 / 60 / 24;
        const millisj = new Date().getTime() - mem.joinedAt.getTime();
        const nowj = new Date();
        const joinedAt = millisj / 1000 / 60 / 60 / 24;

        if (!inv[mem.id + message.guild.id]) inv[mem.id + message.guild.id] = {
            inviter: "Not stored in database",
            totalSecs: 0
        }

        fs.writeFile("./userD.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
        // Invites
        const guildInvites = await message.guild.fetchInvites();
        let invites = 0;
        guildInvites.forEach(i => {
            if (i.inviter.id === auth.id) {
                invites += i.uses;
            }
        }) // اصلا البوت معاه انفايتات؟؟؟؟

        let inviter = client.users.get(inv[mem.id + message.guild.id].inviter);

        const {
            body: bot
        } = await get(message.guild.iconURL.replace(imageUrlRegex, "?size=128"));
        let cnvs = require("canvas-constructor");
        let canvas = new cnvs.Canvas(417, 181)
        canvas.addImage(img, 0, 0, 417, 181)
        canvas.addRoundImage(bot, 7, 1, 29, 29, 25)
        canvas.setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
        canvas.setShadowOffsetY(3) // Drop the shadow by 5 pixels.
        canvas.setShadowBlur(03) // Blur the shadow by 10.
        canvas.save()
            .addRoundImage(ava, 320, 55, 78, 78, 39)
            .setTextAlign("center")
            .setTextFont("8pt Cairo")
        canvas.setColor((mem.highestRole.hexColor === "#000000") ? "#ffffff" : mem.highestRole.hexColor)
        canvas.addText(name, 360, 162)
        canvas.setColor("#FFFFFF")
        canvas.addText(createdAt.toFixed(), 192, 77)
        canvas.addText((joinedAt.toFixed().length >= 3) ? joinedAt.toFixed() : joinedAt.toFixed() + " يوم", 257.5, 77)
        canvas.addText("0", 195, 130)
        canvas.addText("0", 258, 130)
        canvas.addText(`${inv[mem.id+message.guild.id].totalSecs} ثانية`, 205, 163)
        canvas.addText((invites === 1 || invites === 0) ? invites + " عضو" : invites + " أعضاء", 120, 128)
        canvas.addText((inviter) ? inviter.username : "لم يتم تحديدة", 110, 77)
        if (inviter) {
            const {
                body: buffer
            } = await get(inviter.avatarURL.replace(imageUrlRegex, "?size=128"))

            canvas.addRoundImage(buffer, 14, 59, 30, 30, 15)

        }

        //.addText("Joined at: ", 120, 100)
        message.channel.send({
            file: canvas.toBuffer()
        })
    }
})



let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {


        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }

        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }

});


client.login(process.env.BOT_TOKEN);
