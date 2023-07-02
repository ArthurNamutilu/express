const express = require('express')
const posts = express.Router()

posts.get('/', (req, res) => {
    res.send('new posts')
})

posts.get('/old', (req, res) => {
    res.send('see old posts')
})

module.exports = posts