const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('amogus!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Feliz Juaves on duty!');
});


const thursday = 4 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000 + 0 * 60 * 1000;
const week = 7 * 24 * 60 * 60 * 1000;
const millisecondsInADay = 24 * 60 * 60 * 1000;
const millisecondsInAHour = 60 * 60 * 1000;
const millisecondsInAMinute = 60 * 1000;
const millisecondsInASecond = 1000;

function felizJueves() {
    const channel = client.channels.cache.get('597374734627373057');
    channel.send('❤️ Feliz Jueves!️ ❤️');
    channel.send('https://imgur.com/gallery/kpn3Mzt');
    console.log('Sent Feliz Jueves!');
}

function convertDay(firstArg) {
    if (firstArg == 0) {
		return 6;
	} else {
		firstArg -= 1;
		return firstArg;
	}
}

function timeUntilMessage() {
    var now = new Date();
    var time = convertDay(now.getDay()) * millisecondsInADay + now.getHours() * millisecondsInAHour + now.getMinutes() * millisecondsInAMinute + now.getSeconds() * millisecondsInASecond + now.getMilliseconds();
    console.log(convertDay(now.getDay()));
    if (time <= thursday) {
        return thursday - time;
    } else {
        return time;
    }
}

function currentDate() {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();
}

currentDate();

setTimeout(function() {
    felizJueves();
    setInterval(felizJueves, week);
}, timeUntilMessage());

client.login(process.env.DISCORD_TOKEN);