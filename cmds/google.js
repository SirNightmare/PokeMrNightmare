const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = settings.prefix;
let bot = new Discord.Client();
var google = require("google");
module.exports.run = async (bot, message, args) => {
    if(!message.channel.nsfw) return message.reply("Sorry! Please use this command in a NSFW channel just in case.");
    google.resultsPerPage = 1
    var nextCounter = 0
    google(`${args.join(" ")}`, function (err, res){
        var link = res.links[0];
        if(!link) return message.reply("Can\'t find a result!");
        if(!link.link) return message.reply("There is no link for this!");
        if(!link.title) return message.reply("There is no title for this!");
        if(!link.description) return message.reply("There is no description for this!");
        console.log(link);
        let Embed = new Discord.RichEmbed()
        .setAuthor("Google Search", bot.user.displayAvatarURL)
        .setColor(settings.embedcolor)
        .setTitle(`Result for: ${args.join(" ")}`)
        .addField("Title:", link.title)
        .addField("Description:", link.description)
        .addField("Link:", link.link)
        .setTimestamp()
        .setFooter("Searched at: ")
        message.channel.send(Embed)
        });
      }
module.exports.help = {
    name: "google"
}