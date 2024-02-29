import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
if (!text) return m.reply("هذا الامر يمكن من خلاله استخراج الكلمات المفاتيح من كل فيديو على اليوتوب يكفي ان تكتب فقط هكذا على سبيل المثال :\n\n*.yttags* https://youtu.be/J8mIQ65QsJY?si=DFSIZiXZjMJZXm5P")
            await m.reply(wait)
            try {
                let teks = await getYouTubeTags(text)
                await m.reply(teks)
            } catch (e) {
                await m.reply('معذرة لا يمكنني ايجاد كلمات المفاتيح')
            }
}
handler.help = ["yttags"]
handler.tags = ["search"]
handler.command = /^(yttags)$/i
export default handler

/* New Line */

async function getYouTubeTags(url) {
  try {
    const response = await fetch(url);
    const body = await response.text();

    const $ = cheerio.load(body);
    const tags = $('meta[name="keywords"]').attr('content');

    return tags;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
