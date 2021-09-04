const client = require("../db")
const insertUserBuilder = require("../contollers/auth.controller")

const User = {
    id: { type: 'string' },
    login: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    role: { type: 'string' },
}
const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: User
                }
            }
        }
    }
}

function authRoutes(fastify, option, done) {
    fastify.post('/api/login', async (request, reply) => {
        reply.send(request.body)
    })
    fastify.post('/api/register', async (request, reply) => {
        const user = request.body
        const response = await insertUserBuilder([user.login, user.email, user.password, user.role], user.password)
        const status = response.success ? 201 : 500
        console.log(status)
        reply.status(status).send(response)
    })
    done()
}

module.exports = authRoutes
