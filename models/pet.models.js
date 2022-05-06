module.exports = (sequelize, Sequelize) => {
    const Pet = sequelize.define(
        'pet'
    , {
        id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        name: { type: Sequelize.STRING },
        // photoUrls: [{ }],
        // tags: [],
        status: { type: Sequelize.STRING }
        
    });
    return Pet
}