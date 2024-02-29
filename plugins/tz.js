import moment from 'moment-timezone';

const handler = async (m, {conn}) => {

  const tzAF = moment().tz('Africa/Casablanca').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
الـوقت الـحـالـي فـي الـمـغـرب هـو :


▢ morocco     : ${tzAF}
  ${String.fromCharCode(8206).repeat(850)}
  ▢ instagram.com/flibu_gaming`}, {quoted: m});
  };
handler.help = ["tz"]
handler.tags = ["infobot"]
handler.command = /^(tz)$/i
  export default handler;
