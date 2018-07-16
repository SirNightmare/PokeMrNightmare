const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = settings.prefix;
let bot = new Discord.Client();
const Client = require("fortnite")
const fortnite = new Client(settings.fortniteapikey)
module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1] || "pc";

    if(!username) return message.reply("Sorry! you must provide a username.");
    let data = fortnite.user(username, platform).then(data => {
    let stats = data.stats;
    let lifetime = stats.lifetime;
    let score = lifetime[6]['Score'];//done
    let mplayed = lifetime[7]['Matches Played'];//done
    let wins = lifetime[8]['Wins']; //done
    let winper = lifetime[9]['Win%'];//done
    let kills = lifetime[10]['Kills']; //done
    let kd = lifetime[11]['K/d'];//done
    

    let embed = new Discord.RichEmbed()
    .setTitle(`Fortnite stats for ${data.username}`)
    .setColor(settings.embedcolor)
    .addField("Wins", wins, true)
    .addField("Kills", kills, true)
    .addField("Score", score, true)
    .addField("Matches Played", mplayed, true)
    .addField("Wins Percentage", winper, true)
    .addField("K/D", kd, true)
    .setThumbnail("https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png/revision/latest?cb=20170806011008")
    message.channel.send(embed)
    });
      }
module.exports.help = {
    name: "fortnite"
}