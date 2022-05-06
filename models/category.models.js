module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define(
        'category'
    , {
        id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        name: { type: Sequelize.STRING },  
    })
    return Category
}