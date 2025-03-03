const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});
const express = require("express");
const app = express();

client.once("ready", () => {
  console.log("RoleBot is online!");
});

app.get("/", (req, res) => {
  res.send("RoleBot is running!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

client.login(process.env.BOT_TOKEN); // Use environment variable for the token
