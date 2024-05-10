require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: 'на твои булки Олежа',
    type: ActivityType.Watching,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

client.login(
  'MTA4MjM0OTA2NDUwNDQ4Mzg1MA.GawvB9.mxzY9THZa6lC7cs1y2TPMqhEVONJFQC3UGZxVE'
);
