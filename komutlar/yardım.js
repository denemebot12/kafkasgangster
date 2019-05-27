const Discord = require('discord.js');

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Kafkas Gangster`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordbots.org/bot/582147891859030019) | \n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Kafkas Gangster  - Yardım`, `:white_small_square: | **!anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **!eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **!yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **!kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **!müzik**: Müzik ruhun gıdasıdır.    \n:white_small_square:  |   **!sahip**: Bot Sahibinin Komutlarını Gösterir!`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };