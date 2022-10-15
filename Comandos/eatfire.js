module.exports = {
  name: 'eatfire',
  aliases: ['cobrinha'], //Coloque sinônimos
  code: `
$djsEval[(async () => {
const { Snake } = require('discord-gamecord')

new Snake({
  message: message,
  slash_command: false,
  embed: {
   title: 'eatfire',
   color: '#000000',
   overTitle: 'Fim de jogo!'
},
  snake: { head: '<:emoji_5:1030517079884963911>', body: '♦️', tail: '♥️', over: '☠️' },
  emojis: {
   board: '❇️',
   food: '<:emoji_5:1030517209904185454>',
   up: '⬆️',
   right: '➡️',
   down: '⬇️',
   left: '⬅️'
},
  foods: ['<:emoji_5:1030517209904185454>', '☕', '🍡', '🍮'],
  stopButton: 'Encerrar',
  othersMessage: '❌ | Inicie seu próprio jogo! Não tente jogar o dos outros!'
}).startGame();
})()]
`
}