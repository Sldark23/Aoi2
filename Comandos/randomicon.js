module.exports = ({
  name: "randomicon",
 aliases: ['coloque se quiser'],
 code: `

$title[1;Random Icon nome $username[$randomUserID]]
$description[1;Clique [aqui]($userAvatar[$randomUserID]) para baixar o icone]
$footer[1;$username]
$image[1;$userAvatar[$randomUserID]]
$addTimestamp
$botTyping
$cooldown[3s;:stopwatch:・Espere 3 Segundos para randomizar um icone novamente]`})