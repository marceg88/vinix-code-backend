const express = require('express')
const router = express.Router()
const { petCreate, findPetByStatus, findPetById, updatedPet, deletedPet } = require('../controllers/pet.controller')

router.get('/:petId', findPetById)

router.get('/findByStatus', findPetByStatus)

router.post('/', petCreate)

router.post('/:petId', updatedPet)

router.delete('/:petId', deletedPet)

module.exports = router