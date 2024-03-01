let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('تـم حـظـرك مـن اسـتـعـمـال الـبـوت يـا عـزيـزي لانـك تـخـالـف سـيـاسـة اسـتـعـمـالـه ♥ يـمـكـنـك مـعـرفـة سـيـاسـة اسـتـخـدام الـبـوت لـدى صـاحـبـه تـومـاس شـيـلـبـي \nhttps://wa.me/+212645106267 😄!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i

handler.owner = true

export default handler
