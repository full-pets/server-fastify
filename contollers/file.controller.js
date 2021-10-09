const fs = require('fs')
const path = require('path')
const {insertVideoBuilder} = require("../contollers/videos.controller");

async function uploadFile(file) {
    try {
        fs.writeFile(path.resolve(__dirname, '../static', file.name), file.data, (err) => {
            if (err) throw err;

        });
        return true
    } catch {
        return false
    }
}

async function uploadFileDb(file, id) {
    const videoDefault = {
        name: "Video",
        link: `http://localhost:5000/static/${file.name}`,
        owner: id,
        duration: "01.22",
        quality: "360*640",
    }
    const dbResponse = await insertVideoBuilder(Object.values(videoDefault))

    return true
}

module.exports = {uploadFile, uploadFileDb}
