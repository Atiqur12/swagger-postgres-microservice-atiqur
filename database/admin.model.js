module.exports = (sequelize, Sequelize) => {
    const admin = sequelize.define("admin", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return admin;
  };