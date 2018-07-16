const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = settings.prefix;
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    let botmessage = args.join(" ");
        if(message.author.id !== settings.ownerid) return message.channel.send(":no_entry_sign: | You don\'t have permission. Sorry!")
    try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled)
        let question = args.slice(0).join(" ").replace((/`/g,'\`')) + (" ");
        var embed = new Discord.RichEmbed()
         .setAuthor(" | Evaluated", bot.user.avatarURL)
         .setColor(settings.embedcolor)
         .addField("Input :inbox_tray: :", `\`\`\`${question}\`\`\``)
         .addField("Output :outbox_tray: :", `\`\`\`${("x1", clean(evaled))}\`\`\``)
         message.channel.send(embed)
    } catch(err) {
        message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
    }
    function clean(text) {
        if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
      }
module.exports.help = {
    name: "eval"
}