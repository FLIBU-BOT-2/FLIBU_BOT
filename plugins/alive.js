import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مـرحـبـا يـا , ${conn.getName(m.sender)}!
│🤖 أتـمـنـى أنـك بـخـيـر ♥ الـبـوت أون لايـن الآن 
يـمـكـنـك إسـتـخـدامـه عـبـر كـتـابـة menu.
╰────────────────────
*─[ BY ＴＵＭＡＳ ＳＨＩＬＢＩ ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(alive)$/i


export default handler
