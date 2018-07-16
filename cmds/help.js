const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = settings.prefix;
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
   message.reply(":inbox_tray: Check your DM's")
   let embed = new Discord.RichEmbed()
   .setColor(settings.embedcolor)    
   .setAuthor(" | Owner Commands", bot.user.avatarURL)
   .addField(`${settings.prefix}eval (JavaScript Code)`, "Evaluates the JavaScript code you supplied")
   message.author.send(embed)

   let embed2 = new Discord.RichEmbed()
   .setColor(settings.embedcolor)
   .setAuthor(" | Pokemon Commands", bot.user.avatarURL)
   .addField(`${settings.prefix}dex (Pokemon Name)`, "Gets the pokedex entry of the selected pokemon")
   .addField(`${settings.prefix}pokesprite (Pokemon Name)`, "Sends you a pokemon sprite that you selected")
   message.author.send(embed2)

   let embed3 = new Discord.RichEmbed()
   .setColor(settings.embedcolor)
   .setAuthor(" | Pokemon Commands", bot.user.avatarURL)
   .addField(`${settings.prefix}8ball (Question)`, "Gives you a random answer for your question")
   message.author.send(embed3)

   let embed4 = new Discord.RichEmbed()
   .setColor(settings.embedcolor)
   .setAuthor(" | Fun Commands", bot.user.avatarURL)
   .addField(`${settings.prefix}google (Search String)`, `Searches google for th answer`)
   .addField(`${settings.prefix}fortnite (Username) (Platform)`, `Gets the fortnite stats of the user.`)
   message.author.send(embed4)

   let embed5 = new Discord.RichEmbed()
   .setColor(settings.embedcolor)
   .setAuthor(" | NSFW Commands", bot.user.avatarURL)
   .addField(`${settings.prefix}nsfw (Type) (Tag)`, `Searches for a NSFW picture on the Type and Tag you supplied eg. ${settings.prefix}nsfw rule34 furry`)
   message.author.send(embed5)
  }

module.exports.help = {
    name: "help"
}