const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'express',
    password: '123456',
    port: 5432,
})

module.exports = client;
