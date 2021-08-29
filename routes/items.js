const items = require("../items");

const getItemsOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {type: 'string'},
                        name: {type: 'string'}
                    }
                }
            }
        }
    }
}

function itemRoutes(fastify, option, done) {
    fastify.get('/items', getItemsOptions, async (request, reply) => {
        reply.send(items)
    })
    fastify.get('/items/:id', async (request, reply) => {
        const { id } = request.params
        const item = items.find(i => i.id === id)
        reply.send(item)
    })
    done()
}

module.exports = itemRoutes
