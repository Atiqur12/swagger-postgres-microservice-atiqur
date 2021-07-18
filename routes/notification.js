const express = require("express")
const router = express.Router()
const db = require("../database");
const Notification = db.Notification;

/**
 * @swagger
 * /:
 *   get:
 *     summary: get all notification by token
 *     description: you need to provide token for this api to work
*/
/**
 * @swagger
 * /:
 *   post:
 *     summary: create a new notification sending name,email,phone,password
 *     description: after success you will creating new adin
*/
/**
 * @swagger
 * /:
 *   patch:
 *     summary: udpate notification by id here
 *     description: any notification attributes like name,email,phone,password
*/
/**
 * @swagger
 * /:
 *   delete:
 *     summary: test get request here
 *     description: get request goes here
*/


router.get("/", (req, res, next) => {
    Notification.findAll({ })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Notifications."
      });
    });
})
router.post("/", (req, res, next) => {
    Notification.create(req.body)
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
    Notification.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Notification was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Notification with id=${id}. Maybe Notification was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Notification with id=" + id
            });
        });
})
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Notification.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Notification was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Notification with id=${id}. Maybe Notification was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Notification with id=" + id
          });
        });
})


module.exports = router