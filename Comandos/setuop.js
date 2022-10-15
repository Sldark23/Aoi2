module.exports = [{
    name: "setupticket",
    code: `
    - Setup System
    > envia o id da canal
    $awaitMessages[$channelID;$authorID;1m;everything;s1;Exceded time, try again later.] 
    $onlyPerms[manageserver;❌ You don't have necessary permissions: \`MANAGE SERVER\`]
`
},{
    name: "s1",
    type: "awaited",
    code: `
    - Setup System
    > envia o id do categoria de suporte
    $awaitMessages[$channelID;$authorID;1m;everything;s2;Exceded time, try again later.] 
    $wait[1s]
    $setServerVar[category;$message[1]]
    `
},{
    name: "s2",
    type: "awaited",
    code: `
    $setServerVar[setup;true]
    - Setup System
    > Configuração bem sucedida.
    $wait[1s]
    $setServerVar[channel;$message[1]]
    $onlyIF[$channelExists[$message[1]]>false;❌ This channel don't exists, try again.]
    `
}]