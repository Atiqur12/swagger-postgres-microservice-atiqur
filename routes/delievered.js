const express = require("express")
const router = express.Router()
const db = require("../database");
const Delivered = db.Delivered;

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all delievered by token
 *     description: you need to provide token for this api to work
*/
/**
 * @swagger
 * /:
 *   post:
 *     summary: create a new delievered sending name,email,phone,password
 *     description: after success you will creating new adin
*/
/**
 * @swagger
 * /:
 *   patch:
 *     summary: udpate delievered by id here
 *     description: any delievered attributes like name,email,phone,password
*/
/**
 * @swagger
 * /:
 *   delete:
 *     summary: test get request here
 *     description: get request goes here
*/


router.get("/", (req, res, next) => {
    Delivered.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Delivereds."
      });
    });
})
router.post("/", (req, res, next) => {
    Delivered.create(req.body)
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
    Delivered.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Delivered was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Delivered with id=${id}. Maybe Delivered was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Delivered with id=" + id
            });
        });
})
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Delivered.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Delivered was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Delivered with id=${id}. Maybe Delivered was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Delivered with id=" + id
          });
        });
})


module.exports = router