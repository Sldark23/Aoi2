module.exports = {
  name: "work",
  aliases: ['trabalhar'],
  code: `
  $title[**( 🔨 ) Trabalho**]
  $description[
  <@$authorID>, Você trabalhou como: $randomText[engenheiro;padeiro;entregador de jornais;cozinheiro] e ganhou **$random[100;1000]** 💸
  ]
 $footer[Executado por: $username[$authorID];$authorAvatar]
 $color[GREEN]
 $setGlobalUserVar[lo$;$sum[$getGlobalUserVar[lo$;$authorID];$random[100;1000]];$authorID]
 
 $globalCooldown[1m;**( ❌ ) Aguarde \`%time%\` para trabalhar novamente!**]
`
}
//essa parte do "$setGlobalUserVar" ele basicamente soma um numero aleátorio de 100 a 10000 para sua variavel de lo$, iremos testar com um comando de bal
//pode colocar no cooldown tambem: 1d = dia, 2h = duas horas, h = hora, d = dia, m = minuto