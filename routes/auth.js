const { insertUserBuilder, getUser } = require("../contollers/auth.controller")

function authRoutes(fastify, option, done) {
    fastify.post('/api/login', async (request, reply) => {
        const user = request.body
        const response = await getUser(Object.values({ email: user.email, password: user.password }))
        const code = response.success ? 200 : 422
        try {
            if (response.success) {
                response.token = fastify.jwt.sign({ id: response.id })
                reply.status(code).send(response)
            } else {
                throw new Error('User not found')
            }
        } catch ({ message }) {
            reply.status(code).send({ success: false, message })
        }
    })
    fastify.post('/api/register', async (request, reply) => {
        const user = request.body
        const response = await insertUserBuilder(Object.values(user))
        const code = response.success ? 201 : 422
        reply.status(code).send(response)
    })
    done()
}

module.exports = authRoutes
