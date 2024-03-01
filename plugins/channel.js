let handler = async (m, { conn }) => {

m.reply(`*قـنـاتـي عـلـى الـواتـسـاب:*\n
*https://whatsapp.com/channel/0029VaFIufkDZ4LhrMrdm247*
*تـابـعـنـي هـنـاك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
