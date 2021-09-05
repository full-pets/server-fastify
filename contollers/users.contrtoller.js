const client = require('../db')

const get = 'select * from users'

async function getUsers() {
    try {
        const res = await client.query(get)
        return { success: true, users: res.rows }
    } catch ({ message }) {
        return { success: false, message }
    }
}

module.exports = { getUsers }
