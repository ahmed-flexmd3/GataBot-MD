let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(`❏ مجموعة :  *${groupMetadata.subject}*\n *عدد اعضاء*: ${participants.length}\n ${text ? `\n❐ رسالة : ${text}\n` : ''}
*قوموا يلا*
*أعضاء :*
` + users.map(v => '│◦❈↲@' + v.replace(/@.+/, '')).join`\n` + '\n*NIGHT↳🐢↲𝐁𝐎𝐓*', null, {
      mentions: users
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler