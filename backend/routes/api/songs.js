const express = require('express')
const {Song} = require('../../db/models')
const router = express.Router()

router.get(
    '/',
    async (req, res) => {
        const songs = await Song.findAll()
    
    res.json(songs)
});