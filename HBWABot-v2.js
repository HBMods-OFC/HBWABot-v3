
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database virus and whatsapp bugs
//warrrrrrrrr
const { xeonvirtex } = require('./XBug/xeonvirtex')
const { xeonbutton } = require('./XBug/xeonbutton')
const { xeonbrutal } = require('./XBug/xeonbrutal')
const { iphone } = require('./XBug/virtex/iphone')
const { iphone5 } = require('./XBug/virtex/iphone5')
const { xeonbutton2 } = require('./XBug/virtex/xeonbutton2')
const { bugsw } = require('./XBug/virtex/bugsw')
const xpicvirus = fs.readFileSync(`./XBug/xpicvirus.png`)
//warrrrrrrrrr

//database auto reply
let xeonysticker = JSON.parse(fs.readFileSync('./HBMedia/theme/database/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./HBMedia/theme/database/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./HBMedia/theme/database/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./HBMedia/theme/database/video.json'));

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=mp3","seconds":359996400,"ptt": "false"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=918416093656:918416093656\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./HBMedia/theme/hbwabot.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!XeonBotInc.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
/////XeonBotInc.sendMessage(m.chat, {
          ////react: {
            ////////////////////////////////////////text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            ////key: m.key,
          /////}})

//auto recording all
    if (global.autoRecord) { if (m.chat) { XeonBotInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { XeonBotInc.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/XeonBotInc-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/XeonBotInc-md${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  XeonBotInc.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./HBMedia/theme/hbwabot.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
XeonBotInc.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   XeonBotInc.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await XeonBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by herbert
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

        // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Siamted by HBWABot3!",footerText: `${botname}`,buttons: buttons,headerType: 4}
XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//swtich case
        switch(command) {
	case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    XeonBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    XeonBotInc.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    XeonBotInc.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    XeonBotInc.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    XeonBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    XeonBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    XeonBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break            
            case 'buttonmaker': {
            if (!isPremium) throw mess.premime
			if (!text) throw `\n*Entir nan* : ${prefix + command} hi|hello`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `${themeemoji}` }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                XeonBotInc.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Group link rawn dah rawh!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link a dik lo nih hii!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leavegc': {
                if (!isCreator) throw mess.owner
                await XeonBotInc.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `\n*Entir nan* : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 🌿 *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, \n*Entir nan*: *${prefix + command} Handsome Owner*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - for sure\n*${prefix}devote* - for devote\n*${prefix}cekvote* - to check the vote\n*${prefix}deletevote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            XeonBotInc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${XeonBotInc.user.id}
`
XeonBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
            }
            break
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
XeonBotInc.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${XeonBotInc.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${XeonBotInc.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
case 'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
XeonBotInc.sendTextWithMentions(m.chat, teks, m)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the value enable/disable'
                if (args[0] === 'enable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'He message hi kei ma thawn a ni lo!'
                XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Video emaw thlalak a caption ah* ${prefix + command} *tih rawn type rawh*`
           {
XeonBotInc.sendMessage(m.chat, { react: { text: `🧩`, key: m.key }})
              m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Second 10 aia tam a thei lo..!*')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Video emaw thlalak a caption ah *${prefix + command}* rawn dah la\n\n*Video chu second 10 aia tam rawn thawn suh*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `\n*Entir nan* : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `\n*Entir nan* : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case 'buypreim':
m.reply(`Owner be rawh. Owner be thei tur chuan /owner tiin rawn type rawh`)
break
  case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `\n*Entir nan* : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `\n*Entir nan* : ${prefix + command} 😅+🤔`
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'emojimix2': {
	    if (!text) throw `\n*Entir nan* : ${prefix + command} 😅+🤔`
		let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anumix2.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break 
	     
         case 'tts': case 'tawng':{
         	if (!text) throw `\n*Entirnan* : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             XeonBotInc.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
	case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
m.reply(mess.wait)
mee = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await XeonBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `sticker reply la a caption ah *${prefix + command}* ti rawn dah rawh`
                m.reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let bufferimg13x = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `sticker reply la a caption ah *${prefix + command}* ti rawn dah rawh`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Video in a in convert mek' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Video emaw Voice Note rawn reply la a caption ah *${prefix + command}* ti rawn dah rawh`
            if (!quoted) throw `Video emaw Voice Note rawn reply la a caption ah *${prefix + command}* ti rawn dah rawh`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Video emaw Voice Note rawn reply la a caption ah *${prefix + command}* ti rawn dah rawh`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Video emaw Voice Note rawn reply la a caption ah *${prefix + command}* ti rawn dah rawh`
            if (!quoted) throw `Video emaw Voice Note rawn reply la a caption ah *${prefix + command}* ti rawn dah rawh`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${XeonBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Video emaw audio reply la a caption ah ${prefix + command} ti rawn dah lah voice note in a chang ang`
            if (!quoted) throw `Video emaw audio reply la a caption ah ${prefix + command} ti rawn dah lah voice note in a chang ang`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `sticker reply la a caption ah *${prefix + command}* ti rawn dah rawh`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'google': {
                if (!text) throw `\n*Entir nan* : ${prefix + command} Vanglaini news`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search a tangin : ${text}\n\n`
                for (let g of res) {
                teks += `${themeemoji} *Title* : ${g.title}\n`
                teks += `${themeemoji} *Description* : ${g.snippet}\n`
                teks += `${themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'video': { 
if (!text) return m.reply(`\n*Entir nan* : ${prefix + command} Mizo WhatsApp status`)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd = `*${text}*\nHei he ta ka rawn dah khawm bik hi video/mp4 an ni a, A hnuaia *V I D E O* tih khu hmet la i duh ber la chhuak rawh\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: " " + videosearch.all.length + " zawng hi ka hmu",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "V I D E O",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break 
        case 'ytmp3':
if (!args || !args[0]) throw 'Entirnan : *ytmp3 https://youtu.be/xpJ0R7iOKls*'
if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) throw `Link a dik lo tlat`
XeonBotInc.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }})
const jsoni = await fetchJson('https://yt.nxr.my.id/yt2?url=' + args[0] + '&type=audio')
await XeonBotInc.sendMessage(m.chat, {text: `*↺Ka rawn thawn mek lo nghak lawk rawh...* `}, {quoted: m})
if (!jsoni.status || !jsoni.data.url) throw `Download thei lo`
let captiono = `*Y T - P L A Y*\n\n`
captiono += `	◦  *Title* : ${jsoni.title}\n`
captiono += `	◦  *Size* : ${jsoni.data.size}\n`
captiono += `	◦  *Duration* : ${jsoni.duration}\n`
captiono += `	◦  *Bitrate* : ${jsoni.data.quality}\n\n`
captiono += 'ZIMBOT'
zimbotu =  `${jsoni.data.url}`

XeonBotInc.sendMessage(m.chat,{document: {url:jsoni.data.url}, fileName: `${jsoni.title}.mp3`, mimetype: 'audio/mp3', quoted: m, contextInfo: { externalAdReply:{
title:"◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉",
body:"SUB HBMods Channel",
showAdAttribution: true,
mediaType:2,
thumbnail: thumb,
mediaUrl:`https://wa.me/918416/93656`, 
sourceUrl: `https://youtu.be/xpJ0R7iOKls` }
}}, {quoted: m})
break
case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate2')
                if (!text) throw `\n*Entir nan* : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p` 
                {
XeonBotInc.sendMessage(m.chat, { react: { text: `🕜`, key: m.key }})
                m.reply(mess.wait)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `©Generated by HBWABot` }, { quoted: m })
            }
            break        
        case 'yts': case 'ytsearch': case 'youtube': const _0x244632=_0x2493;(function(_0x42e7e3,_0x26c668){const _0x3abfea=_0x2493,_0x4da3ee=_0x42e7e3();while(!![]){try{const _0xec78a2=-parseInt(_0x3abfea(0x17b))/0x1+-parseInt(_0x3abfea(0x180))/0x2*(-parseInt(_0x3abfea(0x17f))/0x3)+-parseInt(_0x3abfea(0x18b))/0x4*(-parseInt(_0x3abfea(0x165))/0x5)+parseInt(_0x3abfea(0x173))/0x6+-parseInt(_0x3abfea(0x171))/0x7+parseInt(_0x3abfea(0x166))/0x8*(-parseInt(_0x3abfea(0x16f))/0x9)+parseInt(_0x3abfea(0x17d))/0xa*(-parseInt(_0x3abfea(0x178))/0xb);if(_0xec78a2===_0x26c668)break;else _0x4da3ee['push'](_0x4da3ee['shift']());}catch(_0x4ab77b){_0x4da3ee['push'](_0x4da3ee['shift']());}}}(_0x56cc,0x7bb74));function _0x56cc(){const _0x124eb9=['description','36Wlgwfz','122788qdRqlm','\x0a*UPLOAD:*\x20','timestamp','\x20I\x20thil\x20zawn\x20title\x20chhu\x20rawh*','ytmp4\x20','yt-search','*▊▊▊YOUTUBE\x20SEARCH▊▊▊*','result:\x20url\x20','\x0a*LINK:*\x20','\x0a*DURATION*\x20','ban','4436uTnxYb','*Entirnan\x20:\x20','mimetype:\x20video/mp4\x20','title','push','3850jVGKsb','8OlfmOa','linkok\x20','sendMessage','VIDEO\x20MP4⬤:','mimetype:\x20audio/mp3\x20','url','\x0a*CHANNEL:*\x20','ytmp3\x20','ago','3680244YcUhko','author','961709ryZPhz','chat','553926TdzmkP','HLA\x20MP3⬤:','all','*\n\n*A\x20chhunga\x20hla\x20leh\x20video\x20te\x20hi\x20i\x20thlang\x20thei\x20ang*\n▬▭▬▭▬▭▬▭▬▭▬▭▬▭','I\x20DUH\x20THLANG\x20RAWH','5834103hwgrIN','\x0a*VIEWS:*\x20','views','99563UadJLi','name','10LXMluy'];_0x56cc=function(){return _0x124eb9;};return _0x56cc();}function _0x2493(_0x75d29c,_0x82bebc){const _0x56cc0e=_0x56cc();return _0x2493=function(_0x2493d3,_0xf39622){_0x2493d3=_0x2493d3-0x165;let _0x1347bc=_0x56cc0e[_0x2493d3];return _0x1347bc;},_0x2493(_0x75d29c,_0x82bebc);}{if(isBan)throw mess[_0x244632(0x18a)];if(!text)throw _0x244632(0x18c)+(prefix+command)+_0x244632(0x183);let yts=require(_0x244632(0x185)),search=await yts(text),no=0x1,sections=[];for(let i of search[_0x244632(0x175)]){const list={'title':''+i[_0x244632(0x18e)],'rows':[{'title':_0x244632(0x174),'rowId':prefix+_0x244632(0x16d)+i[_0x244632(0x16b)],'description':_0x244632(0x16a)+i[_0x244632(0x17e)]+_0x244632(0x181)+i['ago']+_0x244632(0x16c)+i[_0x244632(0x170)][_0x244632(0x17c)]+_0x244632(0x179)+i[_0x244632(0x17a)]+_0x244632(0x189)+i[_0x244632(0x182)]+_0x244632(0x188)+i['url']},{'title':_0x244632(0x169),'rowId':prefix+_0x244632(0x184)+i[_0x244632(0x16b)],'description':_0x244632(0x18d)+i[_0x244632(0x17e)]+'\x0a*UPLOAD:*\x20'+i[_0x244632(0x16e)]+_0x244632(0x16c)+i[_0x244632(0x170)][_0x244632(0x17c)]+_0x244632(0x179)+i[_0x244632(0x17a)]+_0x244632(0x189)+i[_0x244632(0x182)]+_0x244632(0x188)+i[_0x244632(0x16b)]},{'title':'A\x20LINK','rowId':prefix+_0x244632(0x167)+i[_0x244632(0x16b)],'description':_0x244632(0x187)+i[_0x244632(0x17e)]+_0x244632(0x181)+i[_0x244632(0x16e)]+_0x244632(0x16c)+i[_0x244632(0x170)][_0x244632(0x17c)]+_0x244632(0x179)+i[_0x244632(0x17a)]+_0x244632(0x189)+i[_0x244632(0x182)]+'\x0a*LINK:*\x20'+i[_0x244632(0x16b)]}]};sections[_0x244632(0x18f)](list);}const sendm=XeonBotInc[_0x244632(0x168)](m[_0x244632(0x172)],{'text':'︎*'+text+_0x244632(0x176),'footer':'©\x20HBWABOT\x20INC\x202023','title':_0x244632(0x186),'buttonText':_0x244632(0x177),'sections':sections},{'quoted':m});}
                  break   
        case 'song': case 'hla':{
        if (!text) return m.reply(`\n*Entir nan* : ${prefix + command} Hringnun Vanlalsailova`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `*${text}*\nHei he ta ka rawn dah khawm bik hi hla/mp3 an ni a, A hnuaia *H L A* tih khu hmet la i duh ber la chhuak rawh\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3= ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: " " + lagusearch.all.length + " zawng chiah hi ka hmu",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "H L A",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break
        
    case 'play': case 'ytplay':{
                if (!text) throw `\n*Entir nan* : ${prefix + command} K hminga siar lalnu`
                m.reply(mess.wait)
                {
XeonBotInc.sendMessage(m.chat, { react: { text: `▶️`, key: m.key }})
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anulay.url}`, buttonText: {displayText: '🎵HLA'}, type: 1},
                    {buttonId: `ytmp4 ${anulay.url}`, buttonText: {displayText: '🎦VIDEO'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
♕ Title : ${anulay.title}
♕ Ext : Search
♕ ID : ${anulay.videoId}
♕ Duration : ${anulay.timestamp}
♕ Viewers : ${anulay.views}
♕ Upload At : ${anulay.ago}
♕ Author : ${anulay.author.name}
♕ Channel : ${anulay.author.url}
♕ Description : ${anulay.description}
♕ Url : ${anulay.url}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break                                      
	        case 'logo': {
	    if (!text) return reply(`\n*Entir nan :* ${prefix + command} HBMods`)
	    {
XeonBotInc.sendMessage(m.chat, { react: { text: `1️⃣`, key: m.key }})
	const sections = [{
								"title": "A hnuaia Logo button te khu hmet rawh",
								"rows": [
									{
										"title": "Candy",
										"description": "Candy Logo rawn siam rawh le",
										"rowId": `${prefix}candy ${text}`
									},
									{
										"title": "Horror",
										"description": "Horror Logo rawn siam rawh le",
										"rowId": `${prefix}horror ${text}`
										},
										{
										"title": "Hoorror",
										"description": "Hoorror Logo rawn siam rawh le",
										"rowId": `${prefix}hoorror ${text}`
									},
									{
										"title": "Sparkle Christmas",
										"description": "Sparkle Christmas Logo rawn siam rawh le",
										"rowId": `${prefix}sparklechristmas ${text}`
									},
									{
										"title": "Fiction️",
										"description": "Fiction Logo rawn siam rawh le",
										"rowId": `${prefix}fiction ${text}`
									},
									{
										"title": "Scifi",
										"description": "Scifi Logo rawn siam rawh le",
										"rowId": `${prefix}scifi ${text}`
									},
									{
										"title": "Deepsea",
										"description": "Deepsea Logo rawn siam rawh le",
										"rowId": `${prefix}deepsea ${text}`
									},
									{
										"title": "Blackpink",
										"description": "Blackpink Logo rawn siam rawh le",
										"rowId": `${prefix}blackpink2 ${text}`
									}, 
									{
										"title": "Blackpink Art",
										"description": "Blackpink Art Logo rawn siam rawh le",
										"rowId": `${prefix}blackpinkart ${text}`
									}, 
									{
										"title": "Blackpink Neon",
										"description": "Blackpink Neon Logo rawn siam rawh le",
										"rowId": `${prefix}blackpinkneon ${text}`
									}, 
									{
										"title": "Neon",
										"description": "Neon Logo rawn siam rawh le",
										"rowId": `${prefix}neon ${text}`
									}, 
									{
										"title": "Chocolate",
										"description": "Chocolate Logo rawn siam rawh le",
										"rowId": `${prefix}chocolate ${text}`
									}, 
									{
										"title": "Wood",
										"description": "Wood Logo rawn siam rawh le",
										"rowId": `${prefix}wood ${text}`
									}, 
									{
										"title": "Biscuit",
										"description": "Biscuit Logo rawn siam rawh le",
										"rowId": `${prefix}biscuit ${text}`
									}, 
									{
										"title": "Fruit Juice",
										"description": "Fruit Juice Logo rawn siam rawh le",
										"rowId": `${prefix}fruitjuice ${text}`
									}, 
									{
										"title": "Berry",
										"description": "Berry Logo rawn siam rawh le",
										"rowId": `${prefix}berry ${text}`
									}, 
									{
										"title": "Transformer",
										"description": "Transformer Logo rawn siam rawh le",
										"rowId": `${prefix}transformer ${text}`
									}, 
									{
										"title": "Dark Gold",
										"description": "Dark Gold Logo rawn siam rawh le",
										"rowId": `${prefix}darkgold ${text}`
									}, 
									{
										"title": "Wicker",
										"description": "Wicker Logo rawn siam rawh le",
										"rowId": `${prefix}wicker ${text}`
									}, 
									{
										"title": "Halloween",
										"description": "Halloween Logo rawn siam rawh le",
										"rowId": `${prefix}halloween ${text}`
									}, 
									{
										"title": "Blood",
										"description": "Blood Logo rawn siam rawh le",
										"rowId": `${prefix}blood ${text}`
									}, 
									{
										"title": "Matrix",
										"description": "Matrix Logo rawn siam rawh le",
										"rowId": `${prefix}matrix ${text}`
									}, 
									{
										"title": "Leaves",
										"description": "Leaves Logo rawn siam rawh le",
										"rowId": `${prefix}leaves ${text}`
									}, 
									{
										"title": "Glue",
										"description": "Glue Logo rawn siam rawh le",
										"rowId": `${prefix}glue ${text}`
									}, 
									{
										"title": "Sand",
										"description": "Sand Logo rawn siam rawh le",
										"rowId": `${prefix}sand ${text}`
									}, 
									{
										"title": "Skeleton",
										"description": "Skeleton Logo rawn siam rawh le",
										"rowId": `${prefix}skeleton ${text}`
									}, 
									{
										"title": "Fireworks",
										"description": "Fireworks Logo rawn siam rawh le",
										"rowId": `${prefix}firework ${text}`
									}, 
									{
										"title": "Under Water",
										"description": "UnderWater Logo rawn siam rawh le",
										"rowId": `${prefix}underwater ${text}`
									}, 
									{
										"title": "BlodGlass",
										"description": "BlodGlass Logo rawn siam rawh le",
										"rowId": `${prefix}bloodglas ${text}`
									}, 
									{
										"title": "Rock Art",
										"description": "Rock Art Logo rawn siam rawh le",
										"rowId": `${prefix}rockart ${text}`
									}, 
									{
										"title": "Lava",
										"description": "Lava Logo rawn siam rawh le",
										"rowId": `${prefix}lava ${text}`
									}, 
									{
										"title": "Magma",
										"description": "Magma Logo rawn siam rawh le",
										"rowId": `${prefix}magma ${text}`
									}, 
									{
										"title": "Batman",
										"description": "Batman Logo rawn siam rawh le",
										"rowId": `${prefix}batman ${text}`
									}, 
									{
										"title": "Cloud",
										"description": "Cloud Logo rawn siam rawh le",
										"rowId": `${prefix}cloud ${text}`
									}, 
									{
										"title": "Wonderful",
										"description": "Wonderful Logo rawn siam rawh le",
										"rowId": `${prefix} wonderful ${text}`
									}, 
									{
										"title": "Ancient",
										"description": "Ancient Logo rawn siam rawh le",
										"rowId": `${prefix}ancient ${text}`
									}, 
									{
										"title": "1917",
										"description": "1917 Logo rawn siam rawh le",
										"rowId": `${prefix}1917 ${text}`
									}, 
									{
										"title": "Writing",
										"description": "Writing Logo rawn siam rawh le",
										"rowId": `${prefix} writing ${text}`
									}, 
									{
										"title": "Water Color",
										"description": "Water Colour Logo rawn siam rawh le",
										"rowId": `${prefix} watercolor ${text}`
									}, 
									{
										"title": "Classic",
										"description": "Classic Logo rawn siam rawh le",
										"rowId": `${prefix}classic ${text}`
									}, 
									{
										"title": "Halloween Fire",
										"description": "Halloween Fire Logo rawn siam rawh le",
										"rowId": `${prefix}halloweenfire ${text}`
									}, 
									{
										"title": "Sci Fi",
										"description": "Sci Fi Logo rawn siam rawh le",
										"rowId": `${prefix}sci_fi ${text}`
									}, 
									{
										"title": "Fabric",
										"description": "Fabric Logo rawn siam rawh le",
										"rowId": `${prefix}fabric ${text}`
									}, 
									{
										"title": "Discovery",
										"description": "Discovery Logo rawn siam rawh le",
										"rowId": `${prefix}discovery ${text}`
									}, 
									{
										"title": "Pencil",
										"description": "Pencil Logo rawn siam rawh le",
										"rowId": `${prefix}pencil ${text}`
									}, 
									{
										"title": "Neon Light",
										"description": "Neon Light Logo rawn siam rawh le",
										"rowId": `${prefix}neonlight ${text}`
									}, 
									{
										"title": "Neon Ligh2",
										"description": "Neon Light 2Logo rawn siam rawh le",
										"rowId": `${prefix}neonlight2 ${text}`
									}, 
									{
										"title": "Toxic",
										"description": "Toxic Logo rawn siam rawh le",
										"rowId": `${prefix}toxic ${text}`
									}, 
									{
										"title": "Carbon",
										"description": "Carbon Logo rawn siam rawh le",
										"rowId": `${prefix}carbon ${text}`
									}, 
									{
										"title": "Strawberry",
										"description": "Strawberry Logo rawn siam rawh le",
										"rowId": `${prefix}strawberry ${text}`
									}, 
									{
										"title": "Thewall",
										"description": "TheWall Logo rawn siam rawh le",
										"rowId": `${prefix}thewall ${text}`
									}, 
									{
										"title": "Natural",
										"description": "Natural Logo rawn siam rawh le",
										"rowId": `${prefix}natural ${text}`
									}, 
									{
										"title": "3D Neon",
										"description": "3D Neon Logo rawn siam rawh le",
										"rowId": `${prefix}3dneon ${text}`
									}, 
									{
										"title": "Green Neon",
										"description": "Green Neon Logo rawn siam rawh le",
										"rowId": `${prefix}greenneon ${text}`
									}, 
									{
										"title": "Bokeh",
										"description": "Bokeh Logo rawn siam rawh le",
										"rowId": `${prefix}bokeh ${text}`
									}, 
									{
										"title": "Joker",
										"description": "Joker Logo rawn siam rawh le",
										"rowId": `${prefix}joker ${text}`
									}, 
									{
										"title": "Drop Water",
										"description": "Drop Water Logo rawn siam rawh le",
										"rowId": `${prefix}dropwater ${text}`
									}, 
									{
										"title": "Drop Water2",
										"description": "Drop Water2 Logo rawn siam rawh le",
										"rowId": `${prefix}dropwater2 ${text}`
									}, 
									{
										"title": "Holographic",
										"description": "Holographic Logo rawn siam rawh le",
										"rowId": `${prefix}holographic ${text}`
									}, 
									{
										"title": "Thunder",
										"description": "Thunder Logo rawn siam rawh le",
										"rowId": `${prefix}thunder ${text}`
									}, 
									{
										"title": "Glitch",
										"description": "Glitch Logo rawn siam rawh le",
										"rowId": `${prefix}glitch ${text}`
									}, 
									{
										"title": "Summer Time",
										"description": "Summer Time Logo rawn siam rawh le",
										"rowId": `${prefix}summertime ${text}`
									}, 
									{
										"title": "Window",
										"description": "Window Logo rawn siam rawh le",
										"rowId": `${prefix}window ${text}`
									}, 
									{
										"title": "Graffiti Bike",
										"description": "Graffiti Bike Logo rawn siam rawh le",
										"rowId": `${prefix}graffitibike ${text}`
									}, 
									{
										"title": "Neon Devil",
										"description": "Neon Devil Logo rawn siam rawh le",
										"rowId": `${prefix}neondevil ${text}`
									}, 
									{
										"title": "3D Stone",
										"description": "3D Stone Logo rawn siam rawh le",
										"rowId": `${prefix}3dstone ${text}`
									}, 
									{
										"title": "3D Stone2",
										"description": "3D Stone2 Logo rawn siam rawh le",
										"rowId": `${prefix}3dstone2 ${text}`
									}, 
									{
										"title": "Water Drop",
										"description": "Water Drop Logo rawn siam rawh le",
										"rowId": `${prefix}waterdrop ${text}`
									}, 
									{
										"title": "Paper Cut",
										"description": "Paper Cut Logo rawn siam rawh le",
										"rowId": `${prefix}papercut ${text}`
									}, 
									{
										"title": "3D Box",
										"description": "3D Box Logo rawn siam rawh le",
										"rowId": `${prefix}3dbox ${text}`
									}, 
									{
										"title": "Christmas",
										"description": "Christmas Logo rawn siam rawh le",
										"rowId": `${prefix}christmas ${text}`
									}, 
									{
										"title": "3D Christmas",
										"description": "3D Christmas Logo rawn siam rawh le",
										"rowId": `${prefix}3dchristmas ${text}`
									}, 
									{
										"title": "Demon",
										"description": "Demon Logo rawn siam rawh le",
										"rowId": `${prefix}demon ${text}`
									}, 
									{
										"title": "Spooly",
										"description": "Spooky Logo rawn siam rawh le",
										"rowId": `${prefix}spooky ${text}`
									}, 
									{
										"title": "Circuit",
										"description": "Circuit Logo rawn siam rawh le",
										"rowId": `${prefix}circuit ${text}`
									}, 
									{
										"title": "Metallic",
										"description": "Metallic Logo rawn siam rawh le",
										"rowId": `${prefix}metallic ${text}`
									}, 
									{
										"title": "Water Pipe",
										"description": "Water Pipe Logo rawn siam rawh le",
										"rowId": `${prefix}waterpipe ${text}`
									}, 
									{
										"title": "Broke Glass",
										"description": "Broken Glass Logo rawn siam rawh le",
										"rowId": `${prefix}brokenglass ${text}`
									}, 
									{
										"title": "Snow",
										"description": "Snow Logo rawn siam rawh le",
										"rowId": `${prefix}snow ${text}`
									}, 
									{
										"title": "Multicolor",
										"description": "Multicolor Logo rawn siam rawh le",
										"rowId": `${prefix}multicolor ${text}`
									}, 
									{
										"title": "Ice",
										"description": "Ice Logo rawn siam rawh le",
										"rowId": `${prefix}ice ${text}`
									},
									{
										"title": "Honey",
										"description": "Honey Logo rawn siam rawh le",
										"rowId": `${prefix}honey ${text}`
									}
								]
							}
						]
const listMessage = {
  text: "Logo tih khu hmet rawh",
  footer: ``,
  title: `Hi 👋 ${pushname} \nCommand a tanga logo i siam chu he tah hian i duh ber i thlang chhuak thei ang`,
  buttonText: "LOGO",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break 
            case 'logo2': {
	    if (!text) return reply(`\n*Entir nan :* ${prefix + command} HBMods|Cannel`)
	    {
XeonBotInc.sendMessage(m.chat, { react: { text: `2️⃣`, key: m.key }})
	const sections = [{
								"title": "A hnuaia Logo button te khu hmet rawh",
								"rows": [
									{
										"title": "Pornhub",
										"description": "Pornhub Logo rawn siam rawh le",
										"rowId": `${prefix}pornhub ${text}`
									},
									{
										"title": "Lion",
										"description": "Lion Logo rawn siam rawh le",
										"rowId": `${prefix}lion ${text}`
										},
									{
										"title": "Pornhub2",
										"description": "Pornhub2 Logo rawn siam rawh le",
										"rowId": `${prefix}pornhub2 ${text}`
										},
										{
										"title": "Horror",
										"description": "Horror Logo rawn siam rawh le",
										"rowId": `${prefix}horror ${text}`
									},
									{
										"title": "3Dspace",
										"description": "3Dspace Logo rawn siam rawh le",
										"rowId": `${prefix}3dspace ${text}`
									},
									{
										"title": "3D Neon️",
										"description": "3D Neon Logo rawn siam rawh le",
										"rowId": `${prefix}3dneon ${text}`
									},
									{
										"title": "Wolf",
										"description": "Wolf Logo rawn siam rawh le",
										"rowId": `${prefix}wolf ${text}`
									},
									{
										"title": "Graffiti",
										"description": "Graffiti Logo rawn siam rawh le",
										"rowId": `${prefix}graffiti ${text}`
									},
									{
										"title": "Glitch2",
										"description": "Glitch2 Logo rawn siam rawh le",
										"rowId": `${prefix}glitch2`
									},
									{
										"title": "Glitch3",
										"description": "Glitch3 Logo rawn siam rawh le",
										"rowId": `${prefix}glitch3 ${text}`
									}
								]
							}
						]
const listMessage = {
  text: "Logo tih khu hmet rawh",
  footer: ``,
  title: `Hi 👋 ${pushname} \nCommand a tanga logo2 i siam chu he tah hian i duh ber i thlang chhuak thei ang`,
  buttonText: "LOGO",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break 
case 'hmandan':{
var unicorn = await getBuffer(picak+'A hman dan tur')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'Ka la hrethiam chung lo'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `*A Hman Dan Tur Step by Step in*
    
*1. I WhatsApp settings ah lut la*
*2. Chats tiah khan lut la*
*3. Scroll down la Chat backup ah lut la*
*4. I Message backup kha 100% a tlin hunah*
*5. I WhatsApp hman lai kha Uninstall la*
*6. Chuan he mi [ https://herbert70.blogspot.com/2022/10/whatsapp.html ] WhatsApp hi i install thei tawh mai ang*
*7. I install zo hunah chuan i login anga i login zo hunah restore leh skip a rawn lang anga*
*8. Restore tih kha hmeh zawk tur a ni* 


*He mi step by step a ka rawn dah hi ila hrethiam chiang lo a nih chuan, a hnuaia Button khu hmet rawh*`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'whatsapp': case 'whatsappmod': case 'hbmods': case 'mod': { 
{
XeonBotInc.sendMessage(m.chat, { react: { text: `🪀`, key: m.key }})
	   const sections = [{
								"title": "WhatsApp Mod hrang hrang i duh ber khu la chhuak rawh",
								"rows": [
									{
										"title": "GBWhatsApp",
										"description": "FouadMod",
										"rowId": `${prefix}gbwhatsapp`
									},
									{
										"title": "GBWhatsApp Pro",
										"description": "AlexaMod",
										"rowId": `${prefix}gbpro`
										},
									{
										"title": "OGWhatsApp Pro",
										"description": "AlexaMod",
										"rowId": `${prefix}ogwhatsapp`
										},
										{
										"title": "YOWhatsApp",
										"description": "FouadMod",
										"rowId": `${prefix}yowhatsapp`
									},
									{
										"title": "FMWhatsApp",
										"description": "FouadMod",
										"rowId": `${prefix}fouadmod`
									}
								]
							}
						]
const listMessage = {
  text: "*WhatsApp Mod hrang hrang AlexaMod leh Fouad Mod*\n\n",
  footer: `herbert70.blogspot.com`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "WhatsApp",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break 
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anupint = await pinterest(text)
                result = anupint[Math.floor(Math.random() * anupint.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: `♕ Media Url : `+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anufux = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer13x = await getBuffer(anufux.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `animemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer13x,
                    caption: `Random Waifu`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couplepp': case 'ppcouple': {
                m.reply(mess.wait)
                let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/main/couple.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `♕ Title : ${result.title}\n♕ Category : ${result.type}\n♕ Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
             case 'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `\n*Entir nan* : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                XeonBotInc.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Siamted by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `*Entirnan:* ${prefix + command} Hello|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `*Entirnan:* ${prefix + command} Hello`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `*Entirnan:* ${prefix + command} Hello`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `*Entirnan:* ${prefix + command} Hello`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `*Entirnan:* ${prefix + command} Hello|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `*Entirnan:* ${prefix + command} Hello`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `*Entirnan:* ${prefix + command} Hello|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `*Entirnan:* ${prefix + command} Hello|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `*Entirnan:* ${prefix + command} Hello|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `*Entirnan:* ${prefix + command} Hello|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `*Entirnan:* ${prefix + command} Hello|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `\n*Entir nan* :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `\n*Entir nan* :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `\n*Entir nan* :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Rei lo te minute khat vel min lo nghak rawh...`) 
     console.log(anui)
    XeonBotInc.sendMessage(from, {image:{url:anui}, caption:"Siamted by HBWABot3!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `*Entirnan:* ${prefix + command} Hello`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Siamted by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `\n*Entir nan*: ${prefix + command} Engtia | Editz07`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
XeonBotInc.sendMessage(from,{image:{url:anuphub}, caption:"Siamted by HBWABot3!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `\n*Entir nan*: ${prefix + command} Engtia | Editz07`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
XeonBotInc.sendMessage(from,{image:{url:anutro2}, caption:"Siamted by HBWABot3!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `\n*Entir nan*: ${prefix + command} Engtia | Editz07`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
XeonBotInc.sendMessage(from,{image:{url:anuror2}, caption:"Siamted by HBWABot3!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `\n*Entir nan*: ${prefix + command} Engtia | Editz07`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
XeonBotInc.sendMessage(from,{image:{url:anubit8}, caption:"Siamted by HBWABot3!"},{quoted:m})
}
break
case 'tiktok':{ 
if (!text) return m.reply( `\n*Entir nan* : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio ${q}`, buttonText: { displayText: `AUDIO‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
XeonBotInc.sendMessage(m.chat, { caption: `Siamted by HBWABot3!`, video: { url: data.watermark }, buttons: button, footer: botname, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
if (!text) return m.reply( `\n*Entir nan* : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktokgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoksantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokkayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokpanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'chinese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hijab':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'indo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'japanese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'korean':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'malay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thai':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'vietnamese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'aesthetic':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'antiwork':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bike':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'notnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'car':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    XeonBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
	        case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
        case 'ringtone': {
		if (!text) throw `\n*Entir nan* : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'stickman':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'spongebob':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'gojosatoru':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'nicholas':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'cartoon':
m.reply(mess.wait)
XeonBotInc.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`I thlak tur audio reply rawh he tiang hian *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'public': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = true
                m.reply('*Mi zawng zawng hman thei tura siam a ni ta e*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                XeonBotInc.public = false
                m.reply('*Owner leh bot chauh hman thei tura siam a ni ta*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break                      
case 'hijack':{
  if(!isCreator) throw mess.owner
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) throw `\n*Entir nan*:\n${order +' 1234567890@g.us|_amount_'}`
  if(!text2) throw `Eg:\n${order +' 1234567890@g.us|_amount_'}`
  XeonBotInc.sendMessage(text1, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })               
  await XeonBotInc.sendMessage(from, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })                
  await m.sequestrar(text1, participants.map(mem => mem.id), text2)
  }
  break
case 'setthumb':{
                       if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
                       if (!isQuotedImage) return m.reply('Picture reply rawh!')
                                 let media = await XeonBotInc.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await fs.writeFileSync('./HBMedia/theme/hbwabot.jpg', media)
               m.reply(mess.success)
            }
          break
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning on nsfw in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'mediafire': {
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `I link rawn dah hi a dik lo`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
XeonBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
        case 'gimage': {
       if (!text) throw `\n*Entir nan* : ${prefix + command} kaori lizard`
        xeonezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = xeonezyanu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
♕ *Query* : ${text}
♕ *Media Url* : ${images}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
case 'img':
case 'image': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anuxeonezy2 = await pinterest(text)
                resultkkk3 = anuxeonezy2[Math.floor(Math.random() * anuxeonezy2.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: ` ♕ Media Url : `+resultkkk3 }, { quoted: m })
            }
            break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return m.reply(`\n*Entir nan* :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Second 10 aia tam a thei loh!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'emoji': {
if (!args.join(" ")) return m.reply('Khawnge emoji chu🙄?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await XeonBotInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Siamted by ${global.botname}`}, {quoted:m})
await XeonBotInc.sendMessage(from, {text:"He mi thlalak hi *s* tiin reply la sticker ah a chang ang"}, {quoted:mese})
})
}
break
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper': case 'animewall': {
                if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'igemoji': 
case 'instagramemoji': 
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "10")
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'loli-waifu':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					XeonBotInc.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                XeonBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `♕ Title : ${result912.title}\n♕ Category : ${result912.category}\n♕ Mimetype : ${result912.type}\n♕ Views : ${result912.views_count}\n♕ Shares : ${result912.share_count}\n♕ Source : ${result912.link}\n♕ Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'hentai-neko' :
case 'neko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.neko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Siamted by HBWABot3!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await XeonBotInc.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Siamted by HBWABot3!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await XeonBotInc.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  
case 'milf':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break 
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await XeonBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await XeonBotInc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case'slap2':
if(!quoted){
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const mention = msg
const mentionedId = await XeonBotInc.getName(mention.mentionedIds)
ctv = `@${contacts.number} *Slapped* @${mentionedId.number}`
const ahh = []
m.reply(media,m.chat , {mentions:[contacts,mentionedId], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}else if(quoted){
const qmid = quoted.author
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const contact1 = await XeonBotInc.getName(qmid)
ctv = `@${contacts.number} *Slapped* @${contact1.number} `
m.reply(media,m.chat , {mentions:[contacts,contact1 ], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}
break

case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animenom' :
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Siamted by HBWABot3!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await XeonBotInc.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewaifu':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `animeneko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await XeonBotInc.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebonk':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehighfive':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'shinobu2':  
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await XeonBotInc.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'animemegumin':
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Siamted by HBWABot3!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await XeonBotInc.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Siamted by HBWABot3!`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await XeonBotInc.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'loli':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/loli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'husbu':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/husbu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomanime':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/random.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'shota':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/shota.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'waifu2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/waifu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'anime':
if (!text) throw `Tu ber nge ni i zawn? a hming rawn ziak rawh`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `A dahna tur a awm lo`
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await XeonBotInc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                break
case 'enge': {
            	if (!text) throw `Zawhna zawt rawh\n\n*Entir nan* : ${prefix + command} i hming?`
            	let lel = [`I bialnu zawt rawg Gf`, `Ka hre lo`, `Ka hre lo, i pa zawt rawh`,`I bialpa zawt rawh`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*Enge ${text}*\nChhanna : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'engtin': {
            	if (!text) throw `Zawhna siam rawh\n\n*Entir nan* : ${prefix + command} nge i bialnu nen in in date?`
            	let gimana = [`Ummm...`, `Thil harsa tak a ni`, `Tih palh ka chhang thei lo che ni`, `Google ah va search rawh`,`Bawng maw, i chiang maw🧐???`,`Ka muhil mek ka chhang thei lo che`,`Aw... ka hmu:(`,`Boss chu maw Herberta hi nia:(`,`I chiang meuh maw🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*Engtin ${text}*\nChhanna : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'runtime': {
            	let lowq = `*${runtime(process.uptime())}*\n*Chhung a online tawh a ni*`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
                await XeonBotInc.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break 
            case 'herbert': case 'siamtu': {
                XeonBotInc.sendContact(m.chat, global.owner, m)
            }
            break
case 'handsomecheck':
				if (!text) return m.reply(`Tu emaw ber tag rawh, \n*Entir nan* : ${prefix + command} @Jda`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return m.reply(`Tu emaw ber tag rawh, \n*Entir nan* : ${prefix + command} @Jda`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nHming : ${q}\nChhanna : *${tik}%*` }, { quoted: m })
					break
					case 'Mizia':
					if (!text) return m.reply(`Tu emaw ber tag rawh, \n*Entir nan* : ${prefix + command} @Jda`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					XeonBotInc.sendMessage(from, { text: `Mizia : ${q}\nChhanna : *${taky}*` }, { quoted: m })
				     break
                    case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return m.reply(`Tu emaw ber tag rawh, \n*Entir nan* : ${prefix + command} @Jda`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nHming : ${q}\nChhanna : *${sange}%*` }, { quoted: m })
					break
                    case 'â':
      case 'mawl':
      case 'smart':
      case 'fing':
      case 'gay':
      case 'patil':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'thiamlo':
      case 'ropui':
      case 'hur':
      case 'wibu':
      case 'asshole':
      case 'beautiful':
      case 'cute':
      case 'naupang':
      case 'hmelchhe':
      case 'hmeltha':
      case 'lesbian':
      case 'upa':
      case 'chhaw':
      case 'ngo':
      case 'dum':
      case 'thu':
      case 'hang':
      case 'nibbi':
      case 'lulian':
      case 'tukzum':
      case 'lian':
      case 'te':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Kan group a *${command}* ber chu @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'oke', buttonText: { displayText: '🤣' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'id':{
            m.reply(from)
           }
          break
case 'toqr':{
  if (!q) return m.reply('Link emaw text in rawn dah tel rawh ')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await XeonBotInc.sendMessage(from, { image: medi, caption:"Siamted by HBWABot3!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'ig': case 'instagram': case 'reels':{ //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (args.length === 0) throw `A link rawn dah tel rawh😂\nSend ${prefix + command} url`
        let urlInsta = args[0];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return XeonBotInc.sendMessage(
                m.chat,
                { text: `Instagram link i rawn dah hi a dik lo` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    XeonBotInc.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    XeonBotInc.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        XeonBotInc.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        XeonBotInc.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            XeonBotInc.sendMessage(m.chat, { text: `Private in a dah a ni ang, a thei lo` }, { quoted: m })
        });
}
break
case 'spotify': //credit: Ray Senpai❤️ https://github.com/EternityBots/Nezuko
if (!text) return m.reply(`A link rawn dah tel rawh😂`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `Spotify link i rawn dah hi a dik lo`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `♕ *Title:* ${name || ''}\n♕ *Artists:* ${(artists || []).join(
            ','
        )}\n♕ *Album:* ${album_name}\n♕ *Release Date:* ${release_date || ''}`
       const response = await XeonBotInc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await XeonBotInc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'tqtt': 
throw `Thanks to
Xeon
My family
And all friends who helped assemble this sexy script !!!`
break
case 'alive': case 'panel': case 'menu': case 'help': case '?': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            let xeonezy = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${ucapanWaktu} 😄
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}
│𝗕𝗼𝘁 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : ${XeonBotInc.public ? 'Public' : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}
└┬────────────┈ ⳹
   │✑  A hnuaia button 
   │✑  khu hmet rawh
   └─────────────┈ ⳹`
            let ments = [ownernya, me, ini_mark]        
            let buttons = [{ buttonId: 'siamtu', buttonText: { displayText: 'Herbert' }, type: 1 },{ buttonId: 'command', buttonText: { displayText: 'List Menu' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./HBMedia/theme/cheems.xlsx'),
  fileName : `${wm}`,
  mimetype: `${docs}`,
  fileLength: '99999999999999',
  pageCount: '1000000000',
  caption: xeonezy,
  footer: botname,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: botname,
  body: wm, 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: websitex,
  sourceUrl: websitex
  }}
  }
  XeonBotInc.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
            break
            case 'command': {
	const sections = [{
								"title": "Initial Features Of Bot 🦄",
								"rows": [
									{
										"title": "Other ☕",
										"description": "Displays The List Of Other Features",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "Bot Features ❤️",
								"rows": [
									{
										"title": "WhatsApp Mod",
										"description": "WhatsApp Mod te a ni",
										"rowId": `${prefix}hbmods`
									},
									{
										"title": "Owner Menu 💠",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu ✨",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu 🌈",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "WhatsApp Mod Menu",
										"description": "Displays The List Of WhatsApp Mod",
										"rowId": `${prefix}whatsapp`
									},
									{
										"title": "Download Menu ↘️",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sticker Menu 🃏",
										"description": "Displays The List Of Sticker Features",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "Search Menu 🔎",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Image Menu 🌆",
										"description": "Displays The List Of Random Image Features",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "Random Video Menu 🌆",
										"description": "Displays The List Of Random Video Features",
										"rowId": `${prefix}randomvideomenu`
									},
										{
											"title": "Anime Menu 😘",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Emote Menu 😀",
										"description": "Displays The List Of Emote Features",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "Anime Sticker Menu ☺️",
										"description": "Displays The List Of Anime Sticker Features",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "Nsfw Menu 🤓",
										"description": "Displays The List Of Nsfe Features",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Fun Menu 🕺",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu ⚒️",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu ♻️",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Other Menu 🐸",
										"description": "Displays The List Miscellaneous Features",
										"rowId": `${prefix}othermenu`
									     },
										{
										"title": "War Menu☣️",
										"description": "Displays The List Of War Features",
										"rowId": `${prefix}warmenu`
									}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
									{
										"title": "Thanks To ❤️",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
const listMessage = {
  text: "Menu a mi te hi choose rawh",
  footer: `${botname}\nYouTube: ${websitex}\nInstagram: ${botscript}`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "Menu",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break            
      case 'ownermenu':{
	   var unicorn = await getBuffer(picak+'Owner Menu')
const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'Owner ??'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *OWNER* 	
│♕${prefix}self
│♕${prefix}public
│♕${prefix}join [link]
│♕${prefix}leavegc
│♕${prefix}setbio
│♕${prefix}hijack
│♕${prefix}creategroup [name]
│♕${prefix}block [user]
│♕${prefix}unblock [user]
│♕${prefix}broadcast [text]
│♕${prefix}setppbot [image]
│♕${prefix}setthumb [reply img]
│♕${prefix}setexif
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'groupmenu':{
var unicorn = await getBuffer(picak+'Group Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *GROUP* 	
│♕${prefix}grouplink
│♕${prefix}ephemeral [option]
│♕${prefix}setgcpp [image]
│♕${prefix}setname [text]
│♕${prefix}setdesc [text]
│♕${prefix}group
│♕${prefix}botgroups
│♕${prefix}resetgrouplink
│♕${prefix}editinfo [option]
│♕${prefix}add [user]
│♕${prefix}menfess [number]
│♕${prefix}kick [reply/tag]
│♕${prefix}hidetag [text]
│♕${prefix}tagall [text]
│♕${prefix}autosticker [on/off]
│♕${prefix}autostickerpc [on/off]
│♕${prefix}leveling [on/off]
│♕${prefix}antilinkgc [on/off] 
│♕${prefix}antilinktg [on/off]
│♕${prefix}antilinktt [on/off]
│♕${prefix}antilinkytch [on/off]
│♕${prefix}antilinkytvid [on/off]
│♕${prefix}antilinkig [on/off]
│♕${prefix}antilinkfb [on/off]
│♕${prefix}antilinktwit [on/off]
│♕${prefix}antilinkall [on/off]
│♕${prefix}antivirus [on/off]
│♕${prefix}antitoxic [on/off]
│♕${prefix}antiwame [on/off]
│♕${prefix}nsfw [on/off]
│♕${prefix}promote [reply/tag]
│♕${prefix}demote [reply/tag]
│♕${prefix}react [reply emoji]
│♕${prefix}getpp [reply user]
│♕${prefix}vote
│♕${prefix}devote
│♕${prefix}upvote
│♕${prefix}checkvote
│♕${prefix}delvote
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'fmwhatsapp': case 'fm': case 'fouad': case 'fouadmod': {
XeonBotInc.sendMessage(m.chat, { react: { text: `🪀`, key: m.key }})
	   const sections = [{
								"title": "Heng te hi an ni",
								"rows": [
									{
										"title": "WhatsApp",
										"description": "WhatsApp ka duh e",
										"rowId": `${prefix}fouad2`
									},
									{
										"title": "FMWhatsApp",
										"description": "FMWhatsApp ka duh e",
										"rowId": `${prefix}fouad1`
									}
								]
							}
						]
const listMessage = {
  text: "*FMWhatsApp hi pahnih a thren a ni a, A pakhat zawk hi WhatsApp tiin a awma*",
  footer: `WhatsApp messanger i hman chuan *WhatsApp* in tih hi i install thei lo ang`,
  title: `*FMWhatsApp*`,
  buttonText: "FMWhatsApp",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break 
case 'fouad1':{
var unicorn = await getBuffer(picak+'FMWhatsApp')
XeonBotInc.sendMessage(m.chat, { react: { text: `🪀`, key: m.key }})
const buttons = [
  {buttonId: 'fouad2', buttonText: {displayText: '⏭Next️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `*FMWhatsApp*
https://herbert70.blogspot.com/2022/10/fmwhatsapp.html`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'fouad2':{
var unicorn = await getBuffer(picak+'WhatsApp')
XeonBotInc.sendMessage(m.chat, { react: { text: `🪀`, key: m.key }})
const buttons = [
  {buttonId: 'hmandan', buttonText: {displayText: 'Eng tin nge hman tur?'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `*WhatsApp*
https://herbert70.blogspot.com/2022/10/whatsapp.html
he mi mod bik hi i install thei loh a nih chuan a hman dan tur hrilhfiahna button khu hmet rawh`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'gb': case 'gbwhatsapp': {
var unicorn = await getBuffer(picak+'GBWhatsApp')
XeonBotInc.sendMessage(m.chat, { react: { text: `🪀`, key: m.key }})
const buttons = [
  {buttonId: 'gbpro', buttonText: {displayText: 'GBWhatsApp Pro️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `*GBWhatsApp*
https://herbert70.blogspot.com/2022/04/download-gbwhatsapp-last-version-update.html?m=1`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'gbpro':{
var unicorn = await getBuffer(picak+'GBWhatsApp Pro')
XeonBotInc.sendMessage(m.chat, { react: { text: `🪀`, key: m.key }})
const buttons = [
  {buttonId: 'ogwhatsapp', buttonText: {displayText: 'OGWhatsApp️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `*GBWhatsApp Pro*
https://herbert70.blogspot.com/2022/12/app-name-gbwhatsapp-pro-version-17.html?m=1`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'ogwhatsapp': case 'og': {
var unicorn = await getBuffer(picak+'OGWhatsApp')

const buttons = [
  {buttonId: 'yowhatsapp', buttonText: {displayText: 'YOWhatsapp'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `*OGWhatsApp*
 https://herbert70.blogspot.com/2022/12/ogwhatsapp.html?m=1`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'yowhatsapp': case 'yo': {
var unicorn = await getBuffer(picak+'YOWhatsApp')
XeonBotInc.sendMessage(m.chat, { react: { text: `🪀`, key: m.key }})
const buttons = [
  {buttonId: 'gbwhatsapp', buttonText: {displayText: 'GBWhatsApp️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `*YOWhatsApp*
https://herbert70.blogspot.com/2022/10/yowhatsapp.html`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'makermenu':{
var unicorn = await getBuffer(picak+'Maker Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ MAKER 	
│♕${prefix}logo [your text]
│♕${prefix}logo2 [your|text,]
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'downloadmenu':{
var unicorn = await getBuffer(picak+'Download Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *DOWNLOAD* 	
│♕${prefix}tiktok [url]
│♕${prefix}tiktokaudio [url]
│♕${prefix}instagram [url]
│♕${prefix}spotify [url]
│♕${prefix}mediafire [url]
│♕${prefix}ytmp4 [url|quality]
│♕${prefix}gitclone [repo link]
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'searchmenu':{
var unicorn = await getBuffer(picak+'Search Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *SEARCH* 	
│♕${prefix}play [query]
│♕${prefix}song [query]
│♕${prefix}yts [query]
│♕${prefix}lyrics [query]
│♕${prefix}google [query]
│♕${prefix}google [query]
│♕${prefix}anime [query]
│♕${prefix}pinterest [query]
│♕${prefix}image [query]
│♕${prefix}wallpaper [query]
│♕${prefix}searchno [number]
│♕${prefix}horoscope [query]
│♕${prefix}imdb [movie name]
│♕${prefix}weather [loc name]
│♕${prefix}genshin [char name]
│♕${prefix}wikimedia [query]
│♕${prefix}ytsearch [query]
│♕${prefix}ringtone [query]
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'convertmenu':{
var unicorn = await getBuffer(picak+'Convert Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *CONVERT* 	
│♕${prefix}toimage [reply stick]
│♕${prefix}sticker [reply img|gif]
│♕${prefix}take [reply img|gif|stik]
│♕${prefix}smeme [reply img]
│♕${prefix}emoji [emoji]
│♕${prefix}tovideo [reply img]
│♕${prefix}togif [reply stick]
│♕${prefix}tovn [reply aud]
│♕${prefix}tomp3 [reply vn]
│♕${prefix}toaudio [reply vid]
│♕${prefix}ebinary [reply txt]
│♕${prefix}dbinary [reply txt]
│♕${prefix}tinyurl [link]
│♕${prefix}styletext [text]
│♕${prefix}volume [reply aud]
│♕${prefix}bass [reply aud]
│♕${prefix}blown [reply aud]
│♕${prefix}deep [reply aud]
│♕${prefix}earrape [reply aud]
│♕${prefix}fast [reply aud]
│♕${prefix}fat [reply aud]
│♕${prefix}nightcore [reply aud]
│♕${prefix}reverse [reply aud]
│♕${prefix}robot [reply aud]
│♕${prefix}slow [reply aud]
│♕${prefix}smooth [reply aud]
│♕${prefix}squirrel [reply aud]
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'randomimagemenu':{
var unicorn = await getBuffer(picak+'Random Image Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *RANDOM IMG* 	
│♕${prefix}meow
│♕${prefix}chinese
│♕${prefix}japanese
│♕${prefix}korean
│♕${prefix}indo
│♕${prefix}thai
│♕${prefix}vietnamese
│♕${prefix}randomgirl
│♕${prefix}randomboy
│♕${prefix}justina
│♕${prefix}boneka
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'randomvideomenu':{
var unicorn = await getBuffer(picak+'Random Video Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *RANDOM VIDEO*
│♕${prefix}tiktokgirl	
│♕${prefix}tiktoknukhty
│♕${prefix}tiktokpanrika
│♕${prefix}tiktokkayes
│♕${prefix}tiktoknotnot
│♕${prefix}tiktokghea
│♕${prefix}tiktoksantuy
│♕${prefix}tiktokbocil
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
           case 'emotemenu':{
var unicorn = await getBuffer(picak+'Emote Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *EMOTE* 	
│♕${prefix}instagramemoji
│♕${prefix}facebookemoji
│♕${prefix}iphoneemoji
│♕${prefix}samsungemoji
│♕${prefix}joyemoji
│♕${prefix}skypeemoji
│♕${prefix}twitteremoji
│♕${prefix}whatsappemoji
│♕${prefix}microsoftemoji
│♕${prefix}googleemoji
│♕${prefix}pediaemoji
│♕${prefix}microsoftemoji
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'animemenu':{
var unicorn = await getBuffer(picak+'Anime Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *ANIME* 	
│♕${prefix}animeneko
│♕${prefix}waifu
│♕${prefix}shinobu
│♕${prefix}animeawoo
│♕${prefix}animewaifu
│♕${prefix}foxgirl
│♕${prefix}animenom
│♕${prefix}goose
│♕${prefix}8ball
│♕${prefix}avatar
│♕${prefix}tickle
│♕${prefix}gecg
│♕${prefix}feed
│♕${prefix}husbu
│♕${prefix}neko2
│♕${prefix}randomanime
│♕${prefix}shota
│♕${prefix}waifu2
│♕${prefix}animeslap
│♕${prefix}animepat
│♕${prefix}animeneko
│♕${prefix}animekiss
│♕${prefix}animewlp
│♕${prefix}animecuddle
│♕${prefix}animecry
│♕${prefix}animekill
│♕${prefix}animelick
│♕${prefix}animebite
│♕${prefix}animeyeet
│♕${prefix}animebully
│♕${prefix}animebonk
│♕${prefix}animewink
│♕${prefix}animepoke
│♕${prefix}animesmile
│♕${prefix}animewave
│♕${prefix}animeawoo
│♕${prefix}animeblush
│♕${prefix}animesmug
│♕${prefix}animeglomp
│♕${prefix}animehappy
│♕${prefix}animedance
│♕${prefix}animecringe
│♕${prefix}animehighfive
│♕${prefix}animehandhold
│♕${prefix}animemegumin
│♕${prefix}animemegumin
│♕${prefix}animesmug
│♕${prefix}loli-waifu
│♕${prefix}couplepp
│♕${prefix}animewall [query]
│♕${prefix}animewall2 [query]
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'stickermenu':{
var unicorn = await getBuffer(picak+'Sticker Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *STICKER* 	
│♕${prefix}emoji
│♕${prefix}emojimix
│♕${prefix}lovesticker
│♕${prefix}animestick
│♕${prefix}spongebob
│♕${prefix}gojosatoru
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'animestickermenu':{
var unicorn = await getBuffer(picak+'Anime Sticker Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *ANIME STICKER* 	
│♕${prefix}loli
│♕${prefix}bully
│♕${prefix}cuddle
│♕${prefix}cry
│♕${prefix}hug
│♕${prefix}awoo
│♕${prefix}kiss
│♕${prefix}lick
│♕${prefix}pat
│♕${prefix}smug
│♕${prefix}bonk
│♕${prefix}yeet
│♕${prefix}blush
│♕${prefix}smile
│♕${prefix}wave
│♕${prefix}highfive
│♕${prefix}handhold
│♕${prefix}nom
│♕${prefix}glomp
│♕${prefix}bite
│♕${prefix}slap
│♕${prefix}kill
│♕${prefix}happy
│♕${prefix}wink
│♕${prefix}poke
│♕${prefix}dance
│♕${prefix}cringe
│♕${prefix}neko
│♕${prefix}gura
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'nsfwmenu':{
var unicorn = await getBuffer(picak+'Nsfw Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *NSFW* 	
│♕${prefix}gifhentai
│♕${prefix}gifblowjob
│♕${prefix}hentaivideo
│♕${prefix}hneko
│♕${prefix}nwaifu
│♕${prefix}animespank
│♕${prefix}trap
│♕${prefix}gasm
│♕${prefix}ahegao
│♕${prefix}ass
│♕${prefix}bdsm
│♕${prefix}blowjob
│♕${prefix}cuckold
│♕${prefix}cum
│♕${prefix}milf
│♕${prefix}eba
│♕${prefix}ero
│♕${prefix}femdom
│♕${prefix}foot
│♕${prefix}gangbang
│♕${prefix}glasses
│♕${prefix}hentai
│♕${prefix}jahy
│♕${prefix}manga
│♕${prefix}masturbation
│♕${prefix}neko-hentai
│♕${prefix}neko-hentai2
│♕${prefix}nsfwloli
│♕${prefix}orgy
│♕${prefix}panties
│♕${prefix}pussy
│♕${prefix}tentacles
│♕${prefix}thights
│♕${prefix}yuri
│♕${prefix}zettai
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'funmenu':{
var unicorn = await getBuffer(picak+'Fun Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *FUN* 
│♕${prefix}say [text]	
│♕${prefix}define [text]
│♕${prefix}how [text]
│♕${prefix}when [text]
│♕${prefix}where [text]
│♕${prefix}is [text]
│♕${prefix}what [text]
│♕${prefix}can [text]
│♕${prefix}rate [text]
│♕${prefix}coolcheck [tag]
│♕${prefix}stupidcheck [tag]
│♕${prefix}waifucheck [tag]
│♕${prefix}evilcheck [tag]
│♕${prefix}dogcheck [tag]
│♕${prefix}hotcheck [tag]
│♕${prefix}smartcheck [tag]
│♕${prefix}uncleancheck [tag]
│♕${prefix}greatcheck [tag]
│♕${prefix}beautifulcheck [tag]
│♕${prefix}awesomecheck [tag]
│♕${prefix}prettycheck [tag]
│♕${prefix}lesbiancheck [tag]
│♕${prefix}gaycheck [tag]
│♕${prefix}cutecheck [tag]
│♕${prefix}uglycheck [tag]
│♕${prefix}hornycheck [tag]
│♕${prefix}charactercheck [tag]
│♕${prefix}lovelycheck [tag]
│♕${prefix}couple
│♕${prefix}soulmate
│♕${prefix}hot
│♕${prefix}sexy
│♕${prefix}kind
│♕${prefix}idiot
│♕${prefix}handsome
│♕${prefix}beautiful
│♕${prefix}cute
│♕${prefix}pretty
│♕${prefix}lesbian
│♕${prefix}noob
│♕${prefix}bastard
│♕${prefix}foolish
│♕${prefix}nerd
│♕${prefix}asshole
│♕${prefix}gay
│♕${prefix}smart
│♕${prefix}stubble
│♕${prefix}dog
│♕${prefix}horny
│♕${prefix}cunt
│♕${prefix}wibu
│♕${prefix}noobra
│♕${prefix}nibba
│♕${prefix}nibbi
│♕${prefix}comrade
│♕${prefix}mumu
│♕${prefix}rascal
│♕${prefix}scumbag
│♕${prefix}nuts
│♕${prefix}fagot
│♕${prefix}scoundrel
│♕${prefix}ditch
│♕${prefix}dope
│♕${prefix}gucci
│♕${prefix}lit
│♕${prefix}dumbass
│♕${prefix}crackhead
│♕${prefix}mf
│♕${prefix}motherfucker
│♕${prefix}sucker
│♕${prefix}fuckboy
│♕${prefix}playboy
│♕${prefix}fuckgirl
│♕${prefix}playgirl
│♕${prefix}quotes
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'databasemenu':{
var unicorn = await getBuffer(picak+'Database Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *DATABASE* 	
│♕${prefix}setcmd
│♕${prefix}listcmd
│♕${prefix}delcmd
│♕${prefix}lockcmd
│♕${prefix}addmsg
│♕${prefix}listmsg
│♕${prefix}getmsg
│♕${prefix}delmsg
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'othermenu':{
var unicorn = await getBuffer(picak+'Other Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *OTHER* 	
│♕${prefix}afk
│♕${prefix}id
│♕${prefix}toqr [link]
│♕${prefix}repeat
│♕${prefix}readmore [text]
│♕${prefix}toviewonce
│♕${prefix}fliptext [text]] 
│♕${prefix}alive
│♕${prefix}script
│♕${prefix}ping
│♕${prefix}owner
│♕${prefix}menu
│♕${prefix}delete
│♕${prefix}chatinfo
│♕${prefix}quoted
│♕${prefix}listpc
│♕${prefix}listgc
│♕${prefix}donate
│♕${prefix}request
│♕${prefix}report [bug]
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'warmenu':{
var unicorn = await getBuffer(picak+'War Menu')

const buttons = [
  {buttonId: 'siamtu', buttonText: {displayText: 'A Neihtu Nb.'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╭─────❰ *BUG MENU*	
│──────☾pc attack☽
│♕${prefix}pcbut [number]
│♕${prefix}pcvn [number]
│♕${prefix}pcstick [number]
│♕${prefix}pcfast [number]
│♕${prefix}pcslow [number]
│♕${prefix}pcbunny [number]
│♕${prefix}xcrasher [amount]
│♕${prefix}pccontact [amount]
│♕${prefix}virtex5 [amount]
│♕${prefix}flower [amount]
│♕${prefix}pollbug [amount]
│♕${prefix}catalogbug [amount]
│♕${prefix}trollybug [amount]
│♕${prefix}trollybug2 [amount]
│──────☾gc attack☽
│♕${prefix}gcslow
│♕${prefix}gcfast
│♕${prefix}gcbunny
│♕${prefix}tagallbug
│──────☾pc & gc attack☽
│♕${prefix}vnbug [amount]
│♕${prefix}docbug [amount]
│♕${prefix}pcgcslow [number]
│♕${prefix}pcgcfast [number]
│♕${prefix}pcgcbunny [number]
│♕${prefix}textshot
│♕${prefix}docfuck [amount]
│♕${prefix}docsoft [amount]
│♕${prefix}docsoft2 [amount]
╰─────────────✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, buttonMessage)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})