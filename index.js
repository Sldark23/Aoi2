const aoijs = require('aoi.js')
  
 const bot = new aoijs.Bot({
   token: "OTUxNjM4NjgzNjIxMTYzMDY5.GcdXh1.oJQvPx-nxChHepEVTtyaCwDTLv5ETHHfN6MwzQ",
   prefix: "$getServerVar[prefix]",
   intents: 'all',
  autoUpdate: 'true',  // Atualizando automaticamente.

    respondOnEdit: {
    commands: true,
    alwaysExecute: true,
    time: 60000,
   }
   
 });

bot.variables({
  prefix: "lo!",
  channel: "",
  setup: "",
  category: "",
  cor: "",
  lo$: "200",
  chatbot: "oii",
  pontos: "0",
})

bot.onMessage({
  guildOnly: true
})

bot.onMessageUpdate()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, `./Comandos/`) 
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

   

bot.status({
  text: "oi",
  type: "STREAMING",
  status: "DEUS DA GUERRA",
  time: 12

})

bot.status({
  text: "use lo!ajuda",
  type: "STREAMING",
  status: "DEUS DA GUERRA",
  time: 12

})

bot.status({
  text: "meu ping e `$ping`",
  type: "STREAMING",
  status: "DEUS DA GUERRA",
  time: 12

})