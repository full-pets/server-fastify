const fastify = require('fastify')({logger: true})
const path = require('path')
const client = require("./db");

fastify.register(require('fastify-jwt'), {
    secret: 'token'
})
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '/public')
})

fastify.register(require('./routes/auth'))
fastify.register(require('./routes/users'))

fastify.get('/', async (request, reply) => {
    return reply.sendFile('index.html')
})

const start = async () => {
    try {
        await client.connect()
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
