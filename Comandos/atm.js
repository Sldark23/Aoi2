module.exports = {
  name: "atm",
  aliases: ['bal'],
  code: `
  $title[**( 🏦 ) Balance**]
  $description[
  <@$mentioned[1;yes]>, Você tem \`$numberSeparator[$getGlobalUserVar[lo$;$mentioned[1;yes]]]\` 💸
    <@$mentioned[1;yes]>, Você tem \`$numberSeparator[$getGlobalUserVar[pontos;$mentioned[1;yes]]]\` pontos
  ] 
 $footer[Executado por: $username[$authorID];$authorAvatar]
 $color[ffffff]
`
}
//esse yes do "$mentioned[1";yes"]" ele serve para que quando voce nao marcar ninguem, ele pega a sua var, caso esteja o "no" ele nao vai pegar sua var quando voce nao marcar ninguem
//essa \ serve para cancelar o ` para nao interferir no comandos
//ele adiciona uma "," quando o numero tiver mais casas decimais