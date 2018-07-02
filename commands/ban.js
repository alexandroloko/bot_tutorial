exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(!message.guild.member(usuario).bannable) return message.reply("Você não pode banir essa pessoa")
    if(razão.length < 1) return message.reply("Coloque um motivo!")

    message.guild.member(usuario).ban()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("usario banido do server")
   .addField("Usuario:",usuario.username)
   .addField("Motivo::", razão);
   .setColor("RANDOM")

   message.channel.send(embed)
}
