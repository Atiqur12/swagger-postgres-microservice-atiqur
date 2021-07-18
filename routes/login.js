const express = require("express")
const router = express.Router()
const services = require("../services")

const db = require("../database/customer");
const Customer = db.customer;
const Op = db.Sequelize.Op;


/**
 * @swagger
 * /:
 *   post:
 *     summary: test get request here
 *     description: get request goes here
*/



router.post("/", (req, res, next) => {
    let { email, password, role } = req.body
    if (role == "admin") {
        services.sign(0, "admin")
            .then(d => res.status(200).json({ status: true, data: d, message: "loggedin as admin kindly save this token for accesssing admin pages" }))
            .catch(e => res.status(404).json({ status: false, data: [], message: "failed to login as admin", error: e }))
    }
    else {
        Customer.findAll({ where: { email, password } })
            .then(d => d[0])
            .then(foundUser => {
                services.sign(foundUser.id, "customer")
                    .then(d => res.status(200).json({ status: true, data: d, message: "loggedin as admin kindly save this token for accesssing customer pages" }))
                    .catch(e => res.status(404).json({ status: false, data: e, message: "failed to login as customer", error: e }))
            })
            .catch((err) => res.status(404).json({ status: false, message: "failed to login as customer", error: err }))
    }
})


module.exports = router