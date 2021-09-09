const { getVideos, insertVideoBuilder } = require("../contollers/videos.controller");
const { getUser } = require("../contollers/auth.controller");

const Video = {
    id: { type: 'string' },
    name: { type: 'string' },
    link: { type: 'string' },
    owner: { type: 'string' },
    duration: {type: 'string'},
    quality: {type: 'string'},
    created: {type: 'number'},

}
const getVideosOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: Video
                }
            }
        }
    }
}
function videosRoutes(fastify, option, done) {
    fastify.get('/api/videos', { ...getVideosOptions, ...{ preValidation: [fastify.authenticate] } }, async (request, reply) => {
        const { success, videos } = await getVideos()
        console.log({ success })
        const code = success ? 200 : 404
        reply.status(code).send(videos || [])
    })
    fastify.post('/api/videos', async (request, reply) => {
        const video = request.body
        const dbResponse = await insertVideoBuilder(Object.values(video))
        const code = dbResponse.success ? 201 : 422
        try {
            if (dbResponse.success) {
                reply.status(code).send({ success: true })
            } else {
                throw new Error('User not found')
            }
        } catch ({ message }) {
            reply.status(code).send({ success: false, message })
        }
    })
    done()
}

module.exports = videosRoutes
