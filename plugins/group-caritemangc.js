/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, participants }) => {
  if (participants.length === 0) {
    return conn.reply(m.chat, 'Tidak ada anggota di grup.', m);
  }
  const member = participants.map(u => u.id).filter(v => v !== conn.user.jid);
  if (member.length === 0) {
    return conn.reply(m.chat, 'Tidak ada anggota non-bot di grup.', m);
  }
  const phoneNumber = member[Math.floor(Math.random() * member.length)];
  const waLink = `https://wa.me/${phoneNumber.split("@")[0]}`;
  await delay(1000);
  conn.reply(m.chat, 'Sedang mencari...', m);
  await delay(4000);
  conn.reply(m.chat, 'Berhasil mendapatkan satu orang', m);
  await delay(3000);
  conn.sendMessage(m.chat, { text: `Nih Kak ${phoneNumber.split("@")[0]}\n\n${waLink}` }, m);
};
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
handler.help = ['caritemangc', 'carikawangc'];
handler.tags = ['group'];
handler.command = /^(caritemangc|carikawangc)$/i;
handler.owner = false
module.exports = handler
