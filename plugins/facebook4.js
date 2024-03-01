//Dont delete this credit!!!
//Script by ShirokamiRyzen

import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw 'تحميل فيديوهات الفيسبوك مثال \n\n*.facebook4* https://www.facebook.com/100084636007325/posts/pfbid04SWoTpoPX1PiRbmwNqLnSAZzD5b2FT5LsukhEWeE4czyNskCCGKKMVavHftZEfV5l/?app=fbl';
    const sender = m.sender.split(`@`)[0];

    m.reply(wait)

    try {
        const url = args[0];
        const result = await fbdown(url);

        if (!result) {
            throw 'حصلت مشكلة اثناء عملية استيراد المعلومات';
        }

        const videoBuffer = await fetch(result.hdLink).then(res => res.buffer());

        const caption = `
*عـنـوان الـفـيـديـو*: ${result.title}

${result.description}

*رابـط الـفـيـديـو بـجـودة مـتـوسـطـة*\n: ${result.sdLink}
*رابـط الـفـيـديـو بـجـودة عـالـيـة*: \n${result.hdLink}
`;

        await conn.sendMessage(
            m.chat, {
            video: videoBuffer,
            mimetype: "video/mp4",
            fileName: `video.mp4`,
            caption: `هـذا هـو الـفـيـديـو الـخـاص بـك @${sender} \n${caption}`,
            mentions: [m.sender],
        }, {
            quoted: m
        },
        );
    } catch (error) {
        console.error('Handler Error:', error);
        conn.reply(m.chat, `وقـع خـطأ`, m);
    }
};

handler.help = ['facebook4']
handler.tags = ['downloader']
handler.command = /^facebook4$/i

export default handler

async function fbdown(url) {
    try {
        const postOptions = {
            method: 'POST',
            body: new URLSearchParams({
                URLz: url,
            }),
        };

        const response = await fetch('https://fdown.net/download.php', postOptions);
        const html = await response.text();

        const $ = cheerio.load(html);

        return {
            title: $('.lib-row.lib-header').text().trim(),
            description: $('.lib-row.lib-desc').text().trim(),
            sdLink: $('#sdlink').attr('href'),
            hdLink: $('#hdlink').attr('href'),
        };
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
