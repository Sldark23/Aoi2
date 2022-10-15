module.exports = {
  name: 'snake',
  aliases: ['cobrinha'], //Coloque sinônimos
  code: `
$djsEval[(async () => {
const { Snake } = require('discord-gamecord')

new Snake({
  message: message,
  slash_command: false,
  embed: {
   title: 'Cobrinha',
   color: '#000000',
   overTitle: 'Fim de jogo!'
},
  snake: { head: '🟣', body: '🟪', tail: '🟣', over: '☠️' },
  emojis: {
   board: '⬛',
   food: '🍒',
   up: '⬆️',
   right: '➡️',
   down: '⬇️',
   left: '⬅️'
},
  foods: ['🍒', '🍅', '🍇', '🍎'],
  stopButton: 'Encerrar',
  othersMessage: '❌ | Inicie seu próprio jogo! Não tente jogar o dos outros!'
}).startGame();
})()]
`
}