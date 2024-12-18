/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["subzero-md"],
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `━━━━━━━━━━━━━━━━━━━━━━━━

*👋 HELLO ${pushname}*\n\n *I AM SUBZERO MD*\n\n *A MULTIDEVICE BOT 😗*\n\n *CREATED BY THE BIG TEAM ZERO CODERS🇨*\n\n *DON'T FORGET TO ENJOY BRO😎*\n\n\n *THANK YOU.😊*

━━━━━━━━━━━━━━━━━━━━━━━━

*SOURCE CODE* : https://github.com/mrfrank-ofc/SUBZERO-MD

*FOLLOW OWNER* :https://github.com/mrfrank-ofc/

*OWNER ACC* : https://wa.me/18062212660/?text=SubZero+Fan+Here

*CHANNEL* : https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D


> *MR FRANK OFC*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
