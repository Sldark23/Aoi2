module.exports = [{
  name: "criarembed",
code: `
Utilize o botão para criar uma embed
$addButton[1;;1;embedcreate;no;➕]
`
},{
    name: "embedcreate",
    type: "interaction",
    prototype: "button",
    code: `
$interactionModal[Criar Embed;embedmodal;
    {actionRow:     {textInput:Titulo:1:nameInput:yes: Qual sera o titulo?:0:500:}
    }
    {actionRow:     {textInput:Descrição:2:descInput:no:Qual sera a descrição?:0:500}
    }
{actionRow:     {textInput:Footer:1:footerInput:no: Qual sera o footer?:0:100:}
  ]

`
},{
  name: "embedmodal",
  type: "interaction",
  prototype: 'modal',
  code: `
  $sendMessage[{newEmbed:
{title:$textInputValue[nameInput]}
{description:$textInputValue[descInput]}
{color:$getServerVar[cor]}
{footer:$textInputValue[footerInput]}}]
$interactionReply[✅ | Embed criada com sucesso, <@$authorID>!;;;;;yes]
$clear[2]
`
}]