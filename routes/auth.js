const client = require("../db")

const User = {
    id: {type: 'string'},
    login: {type: 'string'},
    email: {type: 'string'},
    password: {type: 'string'},
    role: {type: 'string'},
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

function itemRoutes(fastify, option, done) {
    fastify.get('/auth', getItemsOptions, async (request, reply) => {
        reply.send(users)
    })
    fastify.get('/auth/:id', async (request, reply) => {
        const { id } = request.params
        const item = users.find(i => i.id === id)
        reply.send(item)
    })
    done()
}

module.exports = itemRoutes
