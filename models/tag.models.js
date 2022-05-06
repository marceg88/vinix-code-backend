module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define(
        'tag'
    , {
        id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        name: { type: Sequelize.STRING },  
    })
    return Tag
}