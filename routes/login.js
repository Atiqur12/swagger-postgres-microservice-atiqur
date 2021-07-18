const express = require("express")
const router = express.Router()
const services = require("../services")
const db = require("../database");
const Customer = db.Customer;
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
        Customer.find({ email, password })
            .then(foundUser => {
                user = foundUser
                if (user.password == password && user.email == email) {

                }
            })
            .then((res) => createToken())
            .then(token => updateUserToken(token, user))
            .then(() => {
                delete user.password_digest
                response.status(200).json(user)
            })
            .catch((err) => console.error(err))
    }
})


module.exports = router