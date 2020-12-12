const Discord = require('discord.js');



const client = new Discord.Client();



const prefix = '?';



client.once('ready', () => {

    console.log('your bot name is online!');

});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if(command === '?ping'){

        message.channel.send('pong!');
    }
});





client.login('Nzg3MDYwNjk2ODA5NzM0MTQ0.X9PdZQ.sMzTxyAypG-xe_h5KMBL140xviM');
