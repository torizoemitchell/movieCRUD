const express = require('express')
const router = express.Router()
const knex = require('../knex')

//middleware--------------------------------------------------------------------
//throws an error if the record does not exist in the directors table.
function checkIfRecordExists(req, res, next){
  // FIRST KNEX CALL: Using the given id (req.params.id), look up if that record actually exists
  knex('directors')
  .where('id', req.params.id)
  .then((results) => {
    // If found, go ahead and update that record
    if(!results.length>0) {
      //console.log("found matching record: ", results[0])
      throw new Error('YA DINGUS. NOT FOUND.')
    } else {
      next()
    }
  })
  .catch((err) => {
    next(err)
  })
}

//routes------------------------------------------------------------------------
// READ ALL records for this table
router.get('/',(req, res, next) => {
  knex('directors').then((table) => {
    res.json(table)
  })
  .catch((err) =>{
    next(err)
  })

})

// READ ONE record for this table
router.get('/:id', checkIfRecordExists, (req, res, next) => {
  knex('directors')
  .where('id', req.params.id)
  .then((rows) => {
    res.json(rows)
  })
  .catch((err) => {
    next(err)
  })
})

// CREATE ONE record for this table
router.post('/', (req, res, next) => {
// we'll need some POST body data in order to create a new (req.body)
  let newRecord = {
    name: req.body.name,
  }
  //update database:
  knex('directors')
  .insert(newRecord)
  .returning('*')
  .then((insertedRecord) => {
    res.send(insertedRecord)
  })
  .catch((err) => {
    next(err)
  })
})

// UPDATE ONE record for this table
router.put('/:id', checkIfRecordExists, (req, res, next) => {
//res.send('UPDATED MOVIE RECORD')
  knex('directors')
  .where('id', req.params.id)
  .then((results) => {
    //Check to see what new data was provided via req.body
      let myRecord = results[0]
      if( req.body.name ) { myRecord.name = req.body.name }
    //Update the record in the DB
      knex('directors')
      .update(myRecord)
      .where('id', req.params.id)
      .returning('*')
      .then((updatedRecord) => {
        // Send back the newly updated record object
        res.send(updatedRecord)
      })
  })
})

// DELETE ONE record for this table
router.delete('/:id', checkIfRecordExists, (req, res, next) => {
  //res.send('DELETED MOVIE RECORD')
  knex('directors').del()
        .where('id', req.params.id)
        .returning('*')
        .then((results) => {
          let deletedRecord = results[0]
          res.send(deletedRecord)
        })
})

module.exports = router
