const db = require("./database/customer");
db.sequelize.sync();
// const Customer = db.customer;
const Op = db.Sequelize.Op;

db.customers.findAll({})
.then(d=>console.log(d))
.catch(d=>console.log("proelm"))