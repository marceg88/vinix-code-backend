const db = require('../models/index')
const Pet = db.Pet
const Op = db.Sequelize.Op

const petOptions = {
    async createPet(pet){
        try {
            console.log(pet)
            const petNew = await Pet.create(pet)
            
            console.log("entra")
            return petNew
        } catch (error) {
            return error
        }
        
    },
    async findByStatus(status){
        const condition = status?{status:{[Op.like]: `%$(status)%`}}:null
        try {
            const pets = await Pet.findAll({ where: condition})
            return pets
        } catch (error) {
            return error
        }
    },
    async findById(id){
        try {
            const pet = await Pet.findByPk(id)
            return pet
        } catch (error) {
            return error
        }
    },
    async editPet(id, { name, status }){
        try {
            const pet = await Pet.findByPk(id)
            const updatePet = await pet.update({ name, status })
            console.log("pet", pet)
            return updatePet
        } catch (error) {
            return error 
        }
    },
    async deletePet(id){
        try {
            const pet = await Pet.findByPk(id)
            pet.destroy()
            return
        } catch (error) {
            return error
        }
    }
}

module.exports = petOptions

