const { v4: idv4 } = require('uuid')
const crypto = require('crypto')
const client = require('../db')

const text = 'INSERT INTO users(id, login, email, password, role) VALUES($1, $2, $3, $4, $5)'
const salt = "secretkeynumber1";

async function insertUserBuilder(values, password) {
    const array = values
    array.unshift(idv4())
    array[3] = crypto.scryptSync(password, salt, 36).toString('hex')
    try {
        const res = await client.query(text, array)
        return { success: true }
    } catch (err) {
        return { success: false, message: err.message.split(' ').pop().split('_')[1] || err.message }
    }
}

module.exports = insertUserBuilder

