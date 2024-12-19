const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "img2",
    alias: ["subzero-md2"],
    react: "🤱",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async (query) => {
    try {
        const response = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
            },
        });
        const htmlContent = response.data;
        const $ = cheerio.load(htmlContent);
        const imageUrls = [...htmlContent.matchAll(/\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm)]
            .map(({ groups }) => decodeURIComponent(JSON.parse('"' + groups?.url + '"')))
            .filter(url => /.*\.jpe?g|png$/gi.test(url));

        return imageUrls;
    } catch (error) {
        console.error('An error occurred:', error.message);
        return [];
    }
}
