const express = require("express")
const router = express.Router()
const db = require("../database");
const Customer = db.Customer;

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all customer by token
 *     description: you need to provide token for this api to work
*/
/**
 * @swagger
 * /:
 *   post:
 *     summary: create a new customer sending name,email,phone,password
 *     description: after success you will creating new adin
*/
/**
 * @swagger
 * /:
 *   patch:
 *     summary: udpate customer by id here
 *     description: any customer attributes like name,email,phone,password
*/
/**
 * @swagger
 * /:
 *   delete:
 *     summary: test get request here
 *     description: get request goes here
*/


router.get("/", (req, res, next) => {
    Customer.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Customers."
      });
    });
})
router.post("/", (req, res, next) => {
    Customer.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
})
router.patch("/:id", (req, res, next) => {
    const id = req.params.id;
    Customer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with id=" + id
            });
        });
})
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Customer.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Customer was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Customer with id=" + id
          });
        });
})


module.exports = router