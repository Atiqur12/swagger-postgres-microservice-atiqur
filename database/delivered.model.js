module.exports = (sequelize, Sequelize) => {
    const delievered = sequelize.define("delievered", {
        order: {
            type: Sequelize.STRING
        },
        customer: {
            type: Sequelize.STRING
        }
    });

    return delievered;
};