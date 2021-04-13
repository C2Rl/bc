const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ['$']; // هذا الرمز الي تحطه قبل لا تستعمل البوت 


client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));

client.on('ready', () => {
    console.log("We've inserted all of the codes into the database!");
    console.log("C2Rl is not responsible for any account that is ban by this method");
    console.log("*** Spaming bc gets you penalized by discord faster*** !");
    client.user.setActivity('C2Rl.', { type: 'WATCHING' });
})

client.on("message", message => {
    let bcowners = ["824696464734421055"]

    if (message.content.startsWith(prefix + "bc")) {
        if(!bcowners.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.cache.forEach(m => {m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.member.size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});


client.login('token');
