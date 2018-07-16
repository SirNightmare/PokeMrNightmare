const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = settings.prefix;
let bot = new Discord.Client();
const pokemonGif = require('pokemon-gif');
module.exports.run = async (bot, message, args) => {
    var embed = new Discord.RichEmbed()
    .setColor(settings.embedcolor)
    .setImage(pokemonGif(args[0]))
    message.channel.send(embed)
  }

module.exports.help = {
    name: "pokesprite"
}