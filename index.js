require('dotenv').config();

const Discord = require('discord.js'); 
const client = new Discord.Client();

client.login(process.env.CLIENT_ID);

client.on('ready', () => {   
    console.log('🗿 JosukeBot Ready 🗿'); 
});

let yoCount = 0

const resetYoCount = () => yoCount = 0;
const logger = (logMessage) => console.log(`🗿 ${logMessage} 🗿`)

client.on('message', (msg) => {
    if (msg.content.includes('🗿')) {
        logger(`Replying to author ${msg.author.username} at ${new Date().toLocaleTimeString()}`)
        if (yoCount === 5) {
            msg.channel.send({
                files: ['./image/koichiyoangelo.jpg']
            });
            resetYoCount();
        } else {
            msg.channel.send({
                files: ['./image/yoangelo.gif']
            });
        }

        yoCount++;
        logger(`yoCount is ${yoCount}`);

    };
});