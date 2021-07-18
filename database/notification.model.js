module.exports = (sequelize, Sequelize) => {
    const notification = sequelize.define("notification", {
        customer: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        }
    });

    return notification;
};