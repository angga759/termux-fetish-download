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


if (!input) {
var tek = tags
} else {
var tek = input
}

async function tep() {
const banyak = 10
for (let i = 0; i < banyak; i++) {
console.log("\n[",moment().format("HH:mm:ss"),"]", `Search image on ${tek}`)
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

if(fs.existsSync(`./media/${title}${ext}`)) {
console.log("File Name Already Exists\nAborted Operation")
} else {
console.log("[",moment().format("HH:mm:ss"),"]", `Writing Data... (${title}${ext})`)
var buffer = await getBuffer(url)
fs.writeFile(`./media/${title}${ext}`, buffer, { encoding: "base64" }, (err) => {
if (err) return console.log(color("[ERROR]","red"), err.message)
console.log("[",moment().format("HH:mm:ss"),"]", "Done.")
})
}
}
}

tep();
