
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['918416093656'] 
global.ownername = "Herbert Suantak"
global.ytname = "HBMods Channel"
global.socialm = "herbert70.blogspot.com" 
global.location = "India,Mizoram;Phuaibuang"

//bot bomdy 
global.ownernomer = "918416093656" //ur number
global.premium = ['918416093656'] //ur premium number
global.botname = 'HBWABot' //ur bot name
global.linkz = "https://chat.whatsapp.com/C46rhzrso48Cq2rmIrR4Fj" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/@HBMods_Channel" //ur website to be displayed
global.botscript = 'https://instagram.com/herbert_suantak2' //script link
global.themeemoji = "🌚" //ur theme emoji
global.packname = "Siamted by" //ur sticker watermark packname
global.author = "HBWABot" //ur sticker watermark author
global.wm = "HBWABot" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Kha le!',
    admin: 'He features hi chu admin te chauh hman thei tur a siam a ni!',
    botAdmin: 'Admin min nih tir phaw la, chuan ka ti thei ang!',
    premime: 'Hemi features premium ah ka dah bik hi i hman duh chuan Rent tiin rawn type rawh',
    owner: 'He features hi a neitu chauh hman thei tura siam a ni!',
    group: 'Hei chu group ah chauh hman thei tura siam a ni!',
    private: 'Hei chu private chat ah chauh hman thei tura siam a ni!',
    bot: 'Hei chu kei mah chauh hman thei tur a siam a ni',
    wait: '♲ Nghak lawk rawh..',
    linkm: 'Khawnge a link🙄?',
    endLimit: 'Vawiin ah i hman tur i hmang zo ta, darkar 12 ral hunah i hmang leh thei chauh ang',
    nsfw: 'Nsfw features hi a neitu in a active loh a avngin a hman thei lo a, active turin a siam tu va hrilh rawh',
}

//media target
global.thum = fs.readFileSync("./HBMedia/theme/hbwabot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./HBMedia/theme/hbwabot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./HBMedia/theme/hbwabot.jpg") //ur error pic
global.thumb = fs.readFileSync("./HBMedia/theme/hbwabot.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
