const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL == "true"
        }
    });
const Admin = sequelize.define('Admin', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
});
const Customer = sequelize.define('Customer', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },

    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
});
const Delivered = sequelize.define('Delivered', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: true
    },

    to: {
        type: Sequelize.STRING,
        allowNull: true
    },

});
const Ordered = sequelize.define('Ordered', {
    product: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: true
    },

    qty: {
        type: Sequelize.STRING,
        allowNull: true
    },

});
const Notification = sequelize.define('Notification', {
    customer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: true
    },

});



module.exports = {
    Admin: Admin,
    Customer: Customer,
    Delivered: Delivered,
    Ordered: Ordered,
    Notification: Notification,
};