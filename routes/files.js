const fs = require("fs");

function filesRoutes(fastify, option, done) {

    fastify.post('/api/file', async (request, reply) => {
        const b = request.body
        console.log(b)
        // const file = new Uint8Array(Buffer.from(request.body))
        // fs.writeFile('image.svg', file,  'base64', (err) => {
        //     if (err) throw err;
        //     console.log({ file: 123 })
        // });

        reply.send({success: true})
    })
    done()
}

module.exports = filesRoutes
