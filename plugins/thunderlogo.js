const config = require('../config');
const { cmd, commands } = require('../command');


module.exports = {
    name: 'thunder',
    category: 'textpro',
    desc: 'Some text to image feature with various styles.',
    async exec(citel, Void,args,isCreator) {
       
		let anu = await maker.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', args.join(" "))
				Void.sendMessage(citel.chat, {
					image: {
						url: anu
					},
					caption: `Made by SubZero`
				}, {
					quoted: citel
				})
    }
    }
