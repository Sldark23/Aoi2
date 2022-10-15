module.exports = {
  name: "userinfo",
  aliases: ['ui', 'iu', 'infouser'],
  $if: "v4",
  $userRoles: "v4",
  code: `
$title[1;👑 $username[$findUser[$message;yes]]]
$description[1;
> ( 🏷️ ) **Nome e Tag**
\`$username[$findUser[$message;yes]]#$discriminator[$findUser[$message;yes]]\`
> ( 🖇️ ) **ID**
\`$findUser[$message;yes]\`
> ( 🔏 ) **Status DM**
\`$replaceText[$replaceText[$isUserDMEnabled[$findUser[$message;yes]];false;Fechada;1];true;Aberta;1]\`
> ( \📆 ) **Criação da Conta**
<t:$truncate[$divide[$creationDate[$findUser[$message;yes];ms];1000]]:F> (<t:$truncate[$divide[$creationDate[$authorID;ms];1000]]:R>) 
> ( ❓ ) **É um Bot?**
\`$replaceText[$replaceText[$isBot[$findUser[$message;yes]];true;Sim;1];false;Não;1]\`
> ( \💼 ) **Cargos**
\`$replaceText[$userRoles[$findUser[$message;yes]];, @everyone;.;1]\`]
$onlyIf[$memberExists[$findUser[$message;yes]]!=false;❌ | Esse usuário precisa estar no servidor.]
`
}