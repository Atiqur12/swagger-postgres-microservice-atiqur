const express = require("express")
const router = express.Router()
const db = require("../database/ordered");
const Ordered = db.ordered;
const Op = db.Sequelize.Op;

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all Ordered by token
 *     description: you need to provide token for this api to work
*/
/**
 * @swagger
 * /:
 *   post:
 *     summary: create a new Ordered sending name,email,phone,password
 *     description: after success you will creating new adin
*/
/**
 * @swagger
 * /:
 *   patch:
 *     summary: udpate Ordered by id here
 *     description: any Ordered attributes like name,email,phone,password
*/
/**
 * @swagger
 * /:
 *   delete:
 *     summary: test get request here
 *     description: get request goes here
*/


router.get("/", (req, res, next) => {
    Ordered.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Ordereds."
      });
    });
})
router.post("/", (req, res, next) => {
    Ordered.create(req.body)
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
    Ordered.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ordered was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Ordered with id=${id}. Maybe Ordered was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Ordered with id=" + id
            });
        });
})
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Ordered.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Ordered was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Ordered with id=${id}. Maybe Ordered was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Ordered with id=" + id
          });
        });
})


module.exports = router