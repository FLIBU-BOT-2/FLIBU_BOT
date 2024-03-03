let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'الـرابـط غـيـر صـالـح'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`تـم الانـضـمـام للـمـجـمـوعـة بـنـجـاح ${res}${expired ? ` خـلال ${expired} يـوم` : ''}\n\nتـابـع صـاحـب الـبـوت فـي حـسـابـه\ninstagram.com/flibu_gaming`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join']
handler.tags = ['owner']

handler.command = /^join$/i
handler.rowner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
