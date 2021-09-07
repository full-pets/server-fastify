const { getUsers } = require("../contollers/users.contrtoller");

const User = {
    id: { type: 'string' },
    login: { type: 'string' },
    email: { type: 'string' },
    role: { type: 'string' },
}
const getUsersOptions = {
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

function usersRoutes(fastify, option, done) {
    fastify.get('/api/users', { ...getUsersOptions, ...{ preValidation: [fastify.authenticate] } }, async (request, reply) => {
        const { success, users } = await getUsers()
        const code = success ? 200 : 500
        reply.status(code).send(users)
    })
    done()
}

module.exports = usersRoutes
