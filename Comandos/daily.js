module.exports = {
  name: "daily",
  aliases: ['diario'],
  code: `
  $title[**( ✨ ) Daily**]
  $description[
  <@$authorID>, Você conseguiu **$numberSeparator[$random[1000;5000]]** 💸 no seu bônus diário!
  ]
 $footer[Executado por: $username[$authorID];$authorAvatar]
 $color[GREEN]
 $setGlobalUserVar[lo$;$sum[$getGlobalUserVar[lo$;$authorID];$random[1000;5000]];$authorID]
 $globalCooldown[1d;**( ❌ ) Aguarde \`%time%\` para coletar o bônus diário novamente!**]
`
}