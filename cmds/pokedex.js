const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = settings.prefix;
oakdexPokedex = require('oakdex-pokedex');
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    oakdexPokedex.findPokemon(`${args[0].capitalize()}`, function(p) {
       let name = p.names.en; //done
        let types = p.types; //done
        let base_stats = p.base_stats; //done
        let catchrate = p.catch_rate;

        let embed = new Discord.RichEmbed()
        .setAuthor(" | Pokedex", bot.user.displayAvatarURL)
        .setColor(settings.embedcolor)
        .addField("Name:", name)
        .addField("Types:", types)
        .addField("HP:", base_stats.hp)
        .addField("ATK:", base_stats.atk)
        .addField("DEF:", base_stats.def)
        .addField("SP ATK:", base_stats.sp_atk)
        .addField("SP DEF:", base_stats.sp_def)
        .addField("SPEED:", base_stats.speed)
        .addField("Pokemon Catch Rate", catchrate)
        .addField("Category:", p.categories.en)
        message.channel.send(embed)
      });
      }
module.exports.help = {
    name: "dex"
}