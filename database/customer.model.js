module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define("customer", {
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
  
    return customer;
  };