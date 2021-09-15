const fs = require('fs')
const path = require('path')

async function uploadFile(file) {
    try {
        fs.writeFile(path.resolve(__dirname, '../image', file.name), file.data, (err) => {
            if (err) throw err;
            return true
        });

    } catch {
        return false
    }
}
async function myReadFile(name) {
    try {
        fs.readFile(path.resolve(__dirname, '../image', name), (err, data) => {
            if (err) throw err;
            return data
        });

    } catch {
        return false
    }
}
module.exports = { uploadFile, myReadFile }
