const axios = require("axios")
const fetch = require("node-fetch")
const fs = require("fs")
const moment = require("moment-timezone")
moment.tz.setDefault("Asia/Jakarta").locale("id")
const { exec } = require("child_process")
const { color, getBuffer } = require("./Utils")

const input = process.argv[2]
const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
const tags = tag[Math.floor(Math.random() * tag.length || 0)]

function random(format) {
return `${Math.floor(Math.random() * 10000)}${format}`
}

if (!input) {
var tek = tags
} else {
var tek = input
}

console.log("\n[",moment().format("HH:mm:ss"),"]", `Search image on ${tek}`)
async function tep() {
var tex = ''
const pet = await axios.get(`https://meme-api.herokuapp.com/gimme/${tek}`).catch(err => console.log(color("[ERROR]","red"), `${err.message}`))
console.log("[",moment().format("HH:mm:ss"),"]", "Image Found!")
const { url, title } = pet.data
tex += `\nHasil\nLink: ${url}\nTitle: ${title}\n`
console.log(tex)

if (url.endsWith(".gif") || url.endsWith(".mp4")) return console.log("[",moment().format("HH:mm:ss"),"]", "Aborted")

if (url.endsWith(".png")) {
var ext = ".png"
} else {
var ext = ".jpg"
}

if(fs.existsSync(`./media/${random(`${ext}`)}`)) {
console.log("File Name Already Exists\nAborted Operation")
process.kill()
}

var filename = random(`${ext}`)
console.log("[",moment().format("HH:mm:ss"),"]", `Writing Data... (${filename})`)
var buffer = await getBuffer(url)
fs.writeFile(`./media/${filename}`, buffer, { encoding: "base64" }, (err) => {
if (err) return console.log(color("[ERROR]","red"), err.message)
console.log("[",moment().format("HH:mm:ss"),"]", "Done.")
})
}

tep();