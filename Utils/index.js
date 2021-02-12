const chalk = require("chalk")
const fetch = require("node-fetch")

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const getBuffer = (url, options) => {
return new Promise((resolve, reject) => {
fetch(url, options)
.then(respon => respon.buffer())
.then(result => resolve(result))
.catch(err => reject(err))
})
}

module.exports = {
color,
getBuffer
}
