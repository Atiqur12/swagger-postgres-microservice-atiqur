module.exports = (sequelize, Sequelize) => {
    const tutorial = sequelize.define("tutorial", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      
      phone: {
        type: Sequelize.STRING
      },

      password: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return tutorial;
  };