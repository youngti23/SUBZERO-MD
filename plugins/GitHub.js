const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
   pattern: "github",
   desc: "🕵️ Check GitHub profile information",
   react: "🐱",
   category: "other",
   filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
   try {
       if (!q) return reply("❗ Please provide a GitHub username. Usage: .github [username]");

       const username = q.trim();
       const userResponse = await axios.get(`https://api.github.com/users/${username}`);
       const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

       const userData = userResponse.data;
       const reposData = reposResponse.data;

       const githubInfo = `
🐱 *GitHub Profile Information* 🐱

👤 *Username*: ${userData.login}
📛 *Name*: ${userData.name || 'Not Available'}
🌐 *Profile*: ${userData.html_url}

📊 *Profile Stats*:
🌟 *Followers*: ${userData.followers}
👥 *Following*: ${userData.following}
📁 *Public Repositories*: ${userData.public_repos}

📝 *Bio*: ${userData.bio || 'No bio available'}

🏢 *Company*: ${userData.company || 'Not specified'}
📍 *Location*: ${userData.location || 'Not specified'}

🔝 *Top 3 Repositories*:
${reposData
   .sort((a, b) => b.stargazers_count - a.stargazers_count)
   .slice(0, 3)
   .map((repo, index) => `${index + 1}. ${repo.name} (⭐ ${repo.stargazers_count})`)
   .join('\n')}

*POWERED BY MR FRANK*
`;

       return reply(githubInfo);
   } catch (e) {
       console.log(e);
       if (e.response && e.response.status === 404) {
           return reply("🚫 GitHub user not found. Please check the username and try again.");
       }
       return reply("⚠️ An error occurred while fetching GitHub information. Please try again later.");
   }
});