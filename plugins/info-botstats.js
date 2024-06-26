let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, generateWAMessageFromContent, }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw, statusupdate, autogetmsg, antivirus, publicjoin } = global.db.data.settings[conn.user.jid]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    const fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6285876830674-1625305606@g.us",
                   "inviteCode": "https://whatsapp.com/channel/0029VaDvGwI7j6fy8Rz6nq1p",
                   "groupName": "CHATBOT SUPPORT", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
       let thumb = 'https://telegra.ph/file/24c9faab3f85139ac9bb2.jpg'
  let mentionedJid = [m.sender]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sts = `
┏━━━ꕥ Status ꕥ━⬣ 
┃✧  Aktif selama ${uptime}
┃✧  *${groups.length}* Grup
┃✧  *${chats.length - groups.length}* Chat Pribadi
┃✧  *${Object.keys(global.db.data.users).length}* Pengguna
┃✧  ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}
┃✧  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
┗━━━━━━━━━━━━━ꕥ`

conn.sendFile(m.chat, thumb, 'status.jpg', `${sts}`, m)
}

handler.help = ['statusbot']
handler.tags = ['info']
handler.command = /^statusbot?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}