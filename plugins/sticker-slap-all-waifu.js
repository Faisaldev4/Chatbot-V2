/*


Di Record : Zyko MD
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


const { sticker } = require('../lib/sticker.js');
const axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
        switch (command) {
            case 'cry':
            case 'kill':
            case 'hug':
            case 'pat':
            case 'lick':
            case 'kiss':
            case 'bite':
            case 'yeet':
            case 'bully':
            case 'bonk':
            case 'wink':
            case 'poke':
            case 'nom':
            case 'slap':
            case 'smile':
            case 'wave':
            case 'awoo':
            case 'blush':
            case 'smug':
            case 'glomp':
            case 'happy':
            case 'dance':
            case 'cringe':
            case 'cuddle':
            case 'highfive':
            case 'shinobu':
            case 'handhold':
                axios.get(`https://api.waifu.pics/sfw/${command}`)
                    .then(async ({ data }) => {
                    m.reply(md)
                        let stickerData = await sticker(false, data.url, global.stickpack, global.stickauth);
                        if (stickerData) await conn.sendFile(m.chat, stickerData, '', '', m, '', { asSticker: 1 });
                    })
                    .catch(err => console.error(err));
                break;

            default:
                break;
        }
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, 'Error occurred. Please try again.', m);
    }
};

handler.help = ['cry',
'kill',
'hug',
'pat',
'lick',
'kiss',
'bite',
'yeet',
'bully',
'bonk',
'wink',
'poke',
'nom',
'slap',
'smile',
'wave',
'awoo',
'blush',
'smug',
'glomp',
'happy',
'dance',
'cringe',
'cuddle',
'highfive',
'shinobu',
'handhold']
handler.tags = ['sticker']
handler.limit = true
handler.premium = true 
handler.command = ['cry',
'kill',
'hug',
'pat',
'lick',
'kiss',
'bite',
'yeet',
'bully',
'bonk',
'wink',
'poke',
'nom',
'slap',
'smile',
'wave',
'awoo',
'blush',
'smug',
'glomp',
'happy',
'dance',
'cringe',
'cuddle',
'highfive',
'shinobu',
'handhold']

module.exports = handler