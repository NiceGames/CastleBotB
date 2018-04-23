const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot is Online!`);
  client.user.setGame(".help | Bot By NiceGames");
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
     .setDescription("Server Information")
     .setColor("#15f153")
     .setThumbnail(sicon)
     .addField("שם השרת", message.guild.name)
     .addField("Created On", message.guild.createdAt)
     .addField("הצטרפת ב", message.member.joinedAt)
     .addField("אנשים בטירה", message.guild.memberCount);

   return message.channel.send(serverembed);
 }




   if(cmd === `${prefix}botinfo`){

   let bicon = bot.user.displayAvatarURL;
   let botembed = new Discord.RichEmbed()
   .setDescription("Bot Informtaion")
   .setColor("#15f153")
   .setThumbnail(bicon)
   .addField("Bot Name", bot.user.username)
   .addField("Created On", bot.user.createdAt);

     return message.channel.send(botembed);
   }



   if (cmd === `${prefix}report`){
   var reportchannel = bot.channels.get('412328162975023104');
             var reporteduser = message.mentions.users.first().id;
             var reportreason = message.content.split(' ').slice(3).join(' ');

             if (!message.channel.id == '412328162975023104') {
              return message.reply(`Please report someone in the \`reports\` channel!`);
             }

             if (message.author.id === reporteduser) {
                 return message.reply('You cant punish yourself :wink:')
             }

             if (message.mentions.users.size < 1 || message.mentions.users.size > 1) {
                 return message.reply('You need to mention someone to report him!')
             }

             reportchannel.send(`Maniak: ${message.author.tag}\nReported user: ${reporteduser}\nReason: ${reportreason}`);

             message.reply(`We got your report! Thanks :heart:`);
   }
   if (cmd === `${prefix}help`){
   message.reply('שולח לך בפרטי נודר');

   message.author.send(`${prefix}serverinfo - info about the server\n\
${prefix}report - report someone for breaking the server rules
${prefix}botinfo - info about the bot`);
   }

   if (cmd === `${prefix}moveall`){
     let isAdmin = message.member.roles.filterArray(role => {return role.name === 'Owner' || role.name === 'Move-all-er';}).length;
     if (isAdmin === 0){
       return;
     }
     if (message.content.indexOf(".moveall") > -1) {
       channelGetName = message.content.slice(9, 9999);
       findChannel = bot.channels.find('name', channelGetName);
       if (message.content.indexOf("-mute") > -1) {
         MoveMuteUsers(findChannel);
       } else{
         MoveUsers(findChannel);
       }
     }
   }
   });

   function MoveUsers(findChannel){
     bot.channels.findAll('type', 'voice').forEach(channelInfo => {
       if (channelInfo.name.indexOf("AFK") > -1 ){
         console.log("afk");
       } else {
         channelInfo.members.array().forEach(memberNumber => {
           memberNumber.setVoiceChannel(findChannel);
           console.log('moving');
           });
       }
   });
   }

   function MoveMuteUsers(findChannel){
     bot.channels.findAll('type', 'voice').forEach(channelInfo => {
       if (channelInfo.name.indexOf("AFK") > -1 ){
         console.log("afk");
       } else {
         channelInfo.members.array().forEach(memberNumber => {
           memberNumber.setVoiceChannel(findChannel);
           memberNumber.setMute(true, 'moveall');
           console.log('moving');
           });
       }
   });
   }


   // * Move from specific channels.
   // * ignore specific users.


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
