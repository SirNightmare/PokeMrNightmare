const Discord = require("discord.js");
const settings = require("./settings.json");
const yt = require('ytdl-core');
const fs = require("fs");
let bot = new Discord.Client();
let prefix = settings.prefix;
const { YTSearcher } = require('ytsearcher');
const ytsearcher = new YTSearcher(settings.youtubeapikey);

bot.commands =  new Discord.Collection(); 



fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!")
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`)
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", async () => {
    console.log("Bot Ready!");
    console.log("Settings:")
    console.log(`Name: ${bot.user.username}#${bot.user.discriminator}`);
    console.log("Token: " + settings.token);
    console.log("Prefix: " + settings.prefix);
    console.log("Owner ID: " + settings.ownerid)
    bot.user.setPresence({ game: { name: `${settings.presencename} | ${settings.prefix}help for help`, url: 'https://twitch.tv/monstercat', type: 1 } });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  let messsageArray = message.content.split(" ");
  let command = messsageArray[0];
  let args = messsageArray.slice(1);
 

  if(!command.startsWith(settings.prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);
});
bot.login(settings.token);