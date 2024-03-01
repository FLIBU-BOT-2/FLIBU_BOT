import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '_أرسـلـهـا لـصـديـقـتـك♂️_ \nولا تنسى متابعتي هنا \ninstagram.com/flibu_gaming', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '_ارسـلـهـا لـصـديـقـك♀️_\n ولا تنسى متابعتي هنا \ninstagram.com/flibu_gaming', m)
}
handler.help = ['ppcouple','tofanime']
handler.tags = ['anime']
handler.command = ['ppcouple','tofanime'] 


export default handler
