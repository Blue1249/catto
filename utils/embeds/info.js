const { EmbedBuilder } = require('discord.js');
const client = require('../../client');
const { prettyNumbers } = require('../format');

const getInfo = (verificationCount) => new EmbedBuilder()
    .setTitle("Wizard")
    .setColor('#34C6EB')
    .setDescription(
        `Wizard enables more cohesion between between Clash of Clans and your Discord server. Track your stats with your community and show off your achievements!`)
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
    {
        name: 'Contributors',
        value: `• Blue`,
        inline: true
    },
    {
        name: 'Source code',
        value: '[Click to view]',
        inline: true
    },
    {
        name: 'Verifications',
        value: `${prettyNumbers(verificationCount)}`,
        inline: true
    }
)
    .setFooter({text: 'Bot for TEAM SWARM | OTK', iconURL: 'https://media.discordapp.net/attachments/1382561273732005930/1398145018367311872/otk_swarm_icon.png?ex=68844b84&is=6882fa04&hm=ae2e62cac714feaae27cdc61e95e8caea95a445c2eb2a41901495dbbe2542f2a&=&format=webp&quality=losslessg'})

module.exports = {
    getInfo
};
