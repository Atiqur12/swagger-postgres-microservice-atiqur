const express = require("express")
const router = express.Router()
const db = require("../database/delivered");
const Delievered = db.delievered;

const Op = db.Sequelize.Op;

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
    Delievered.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Delievereds."
      });
    });
})
router.post("/", (req, res, next) => {
    Delievered.create(req.body)
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
    Delievered.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Delievered was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Delievered with id=${id}. Maybe Delievered was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Delievered with id=" + id
            });
        });
})
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Delievered.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Delievered was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Delievered with id=${id}. Maybe Delievered was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Delievered with id=" + id
          });
        });
})


module.exports = router