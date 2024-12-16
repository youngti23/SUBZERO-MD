const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
  pattern: 'gemini',
  desc: 'Chat with Gemini AI for search.',
  react: '',
  category: 'search',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply('Please ask me a question');

    const apikey = 'https://api.agatz.xyz/api/gemini?message=';
    const response = await axios.post('(https://axios.xyz)', {
      apikey,
      query: q
    });

    if (response.data) {
      const answer = response.data.answer;
      await conn.sendMessage(from, { text: answer }, { quoted: mek });
    } else {
      reply('Failed to get answer from Gemini AI');
    }
  } catch (e) {
    console.log(e);
    reply('Error: ' + e.message);
  }
});
