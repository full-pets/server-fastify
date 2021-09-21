const { uploadFile, myReadFile } = require("../contollers/file.controller");

function filesRoutes(fastify, option, done) {
    // fastify.get('/api/file/:name', async (request, reply) => {
    //     const { name } = request.params
    //     const file =await myReadFile(name)
    //     reply.send(file)
    // })
    fastify.post('/api/file', async (request, reply) => {
        const file = request.raw.files.file
        const writeFile = await uploadFile(file)
        reply.send({ success: writeFile })
    })
    done()
}

module.exports = filesRoutes
