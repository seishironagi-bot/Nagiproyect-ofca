let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
   // await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
 await m.react('⚡️')
let str = `*📍 GRUPO OFICIAL*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙🌸̶̩ܻᝒ̷̸꯭͙Nagi's Proyect᭄𓆩֟֯፝𓆪𝝣⃯ᵴͦ𝛒⃨ᷫ𝛆ͨ🄲⃪⃯𝛊ᷨ𝛂⃨ͦꝆ᷽ͭ🍁⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔̶̷̸_*
  ┃🧸❏ ${gp4}

   *_ ͟͞〾⃝̵͡𝑬⃗ꭙȾ⃯𝑟𝘦𝑚⃖𝚎֟֯፝͜❀̵⃕ ̤🄷𝕖ᷨɳͦᵵͭ𝐚͢𝖏♡̵̭̭̎͟͞ ₂₀፝֟֯࣪࣪࣪₁₂_*
┃🧸❏ Proximamente
   
   *_Grupo de antojar 3.0_*
┃🧸❏ https://chat.whatsapp.com/FYJyQX59l066Fi9pMGtlP4

   *_Grupo 1_*
┃❤️‍🔥❏ https://chat.whatsapp.com/H5UC1FBtT0pI2YjJZ6zipB

   *_Canal Oficial_*
┃❤️‍🔥❏ https://whatsapp.com/channel/0029Vaz6RTR0LKZIKwudX32x
`
await conn.sendButton(m.chat, str, `͟͞ 𓆩ꪶꪾ𝘿᪶𝙞ᷨ𝙖ᷞ𝙢ͣ𝙤᪶ͨ𝙣ᷜ𝙙ꫂৎ୭࠱࠭ ͟͞\n` + wm, media, [
['Menu Lista 💖', '/lista']], null, [
['⏤͟͞ू⃪ ፝͜⁞M͢ᴇɢ፝֟ᴜᴍ⃨ɪɴ⃜✰⃔࿐', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler