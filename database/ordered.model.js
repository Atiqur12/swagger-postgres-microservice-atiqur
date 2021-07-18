module.exports = (sequelize, Sequelize) => {
    const ordered = sequelize.define("ordered", {
        customer: {
            type: Sequelize.STRING
        },
        product: {
            type: Sequelize.STRING
        }
    });

    return ordered;
};