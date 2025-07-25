  <a href="https://github.com/JamesAUre/ClanCastleBot"><img src="https://i.imgur.com/ozfC7Gy.png" width="100" height="100" alt="Clan Castle"></a>
<h1 align="center">
  <br>
  <a href="https://github.com/Blue1249/catto-botto"><img src="https://media.discordapp.net/attachments/1382561273732005930/1398145018367311872/otk_swarm_icon.png?ex=68844b84&is=6882fa04&hm=ae2e62cac714feaae27cdc61e95e8caea95a445c2eb2a41901495dbbe2542f2a&=&format=webp&quality=lossless" width="100" height="100" alt="Icon"></a>
  <br>
  CattoBotto
  <br>
</h1>
<h4 align="center">The ultimate Clash of Clans Discord stat tracker.</h4>
<p align="center">
  <a href="#overview">Overview</a>
  •
  <a href="#join-the-community">Community</a>
  •
  <a href="#how-to-create-new-instance">Make new instance</a>
  •
  <a href="#authors">Authors</a>
  •
  <a href="#license">License</a>
</p>

# Overview

Wizard is a Discord bot that tracks your Clash of Clans stats and lets you show them off on Discord. This is a single instance bot meaning it's hosted on one machine and invitable to any server. But you can also maintain your own instance if you wish.

Installation is easy, all you need to do is invite the bot to your server and use `/setconfiguration` to specify the bot configuration for it to run properly on the server. In the future this will be moved onto a website.

**This bot includes the following:**

- Posting player stats
- Posting clan stats
- Verifying profiles
- Setting achievement roles
- Competing on community leaderboards

We plan to expand and improve existing functionality in the future as well.

# Join the TEAM SWARM | OTK community!

Join us at the [TEAM SWARM | OTK Discord Server](https://discord.gg/Ddevkg9FRJ)!

# How to create a new instance

Directions on creating an app and getting credentials may be found [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).

Invite your bot to your server, make sure you select the `bot` and `applications.commands` options while creating the invite.

Get your Clash of Clans API Token from [here](https://developer.clashofclans.com/).

## Setting up

1. Clone this repository

2. Make a copy of `.env.copy` and rename it to `.env`.
   Fill in your Discord Token, your Mongo_URI and your Clash Token. Make sure you include Bearer before your clash token like `"Bearer eyJ0eXAiOiJKV..."`

3. Make a copy of the `config.json.copy` file and rename it to `config.json`. Then go to the `config.json` file and change all the ids to ids in your server.

4. Do the same with `emojis.json.copy`, you can set emojis for the bot on the Discord Developer Portal

## Installation

Install all the dependencies using

```bash
npm install
```

Register slash commands to a single guild by running

```bash
node deploy-commands.js
```

You only need to run `node deploy-commands.js` once. You should only run it again if you add or edit existing commands

Finally start the application using

```bash
node index
```

# Authors

- [@Blue](https://github.com/Blue1249)

# License

[MIT](https://choosealicense.com/licenses/mit/)
