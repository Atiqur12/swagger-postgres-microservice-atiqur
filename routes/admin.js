const express = require("express")
const router = express.Router()

const db = require("../database/admin");
const admin = db.admin;
const Op = db.Sequelize.Op;



/**
 * @swagger
 * /:
 *   get:
 *     summary: get all admin by token
 *     description: you need to provide token for this api to work
*/
/**
 * @swagger
 * /:
 *   post:
 *     summary: create a new admin sending name,email,phone,password
 *     description: after success you will creating new adin
*/
/**
 * @swagger
 * /:
 *   patch:
 *     summary: udpate admin by id here
 *     description: any admin attributes like name,email,phone,password
*/
/**
 * @swagger
 * /:
 *   delete:
 *     summary: test get request here
 *     description: get request goes here
*/




router.get("/", (req, res, next) => {
    admin.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Admins."
      });
    });
})
router.post("/", (req, res, next) => {
    admin.create(req.body)
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
    admin.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admin was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Admin with id=" + id
            });
        });
})
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    admin.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "admin was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete admin with id=${id}. Maybe admin was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete admin with id=" + id
          });
        });
})


module.exports = router