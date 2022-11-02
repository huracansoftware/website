const {Client} = require('discord.js-selfbot-v13');
const userclient = new Client({
    checkUpdate: false,
});

userclient.login("token");

userclient.on("ready", () => {
    console.info(`Successfully Logged in as ${userclient.user.tag}!`);
    console.info(`Connected In 🌎 ${userclient.guilds.cache.size} Servers!`);
});

userclient.on("messageCreate", async message => {
    if (message.channel.id === "channel id") {
        console.log(message.content);
    }
});