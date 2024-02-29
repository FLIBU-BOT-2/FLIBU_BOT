let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*الموضوع:*\n${text ? `${text}\n` : ''}\n'*قمت بي اشارة اليك لي تعرف الموضوع*
    })
}

handler.help = ['tagall']
handler.tags = ['owner']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
