const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = settings.prefix;
let bot = new Discord.Client();
const Kaori = require('kaori');
const kaori = new Kaori();
module.exports.run = async (bot, message, args) => {
    if(settings.allownsfw === "false") return message.reply("Sorry! NSFW has been disabled")
    if(!message.channel.nsfw) return message.reply("Please use a NSFW channel");
    kaori.search(`${args[0]}`, { tags: [`${args[1]}`], limit: 1, random: true })
    .then(images => {(
        console.log(images[0].common.fileURL))
        let Embed = new Discord.RichEmbed()
        .setTitle(`Result for: ${args[0]}`)
        .setColor(settings.embedcolor)
        .setImage(images[0].common.fileURL)
        message.channel.send(Embed)
    }).catch(err => console.error(err));
  }

module.exports.help = {
    name: "nsfw"
}