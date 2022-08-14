let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), 'Nih Jgn lupa subscribe Channel FIN•OFFICIAL https://youtube.com/channel/UCCZFKpk85uGzGdGk9kUZUIA', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

