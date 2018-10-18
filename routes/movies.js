const express = require('express')
const router = express.Router()
const knex = require('../knex')
// READ ALL records for this table
router.get('/', (req, res, next) => {
res.send('ALL MOVIE RECORDS')
})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {
res.send('ONE MOVIE RECORD')
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
res.send('CREATED MOVIE RECORD')
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
res.send('UPDATED MOVIE RECORD')
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
res.send('DELETED MOVIE RECORD')
})
module.exports = router
