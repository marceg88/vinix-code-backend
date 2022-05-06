const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize
db.Category = require('./category.models')(sequelize, Sequelize)
db.Tag = require('./tag.models')(sequelize, Sequelize)
db.Pet = require('./pet.models')(sequelize, Sequelize)

module.exports = db