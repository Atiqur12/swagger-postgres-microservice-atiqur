const jwt = require("jsonwebtoken")
const secret = require("../config").secret


const sign = (id, role) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ id: id, role: role }, secret, (err, token) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(token)
            }
        })
    })
}
const verify = (token, role) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                reject(err)
            }
            else {
                if (user.role == role) {
                    resolve(user)
                }
                else {
                    reject("invalid token for " + role)
                }
            }
        })
    })
}

const getToken = req => {
    let token = ""
    if (req.headers.authorization) {
        if (req.headers.authorization.split(" ")) {
            if (req.headers.authorization.split(" ")[1]) {
                token = req.headers.authorization.split(" ")[1]
            }
        }

    }
    return token
}

const admin = (req, res, next) => {
    let token = getToken(req.headers)
   return  verify(token, "admin")
        .then(d => {
            req.id = d.id
            return next()
        })
        .catch(e => res.status(404).json({ status: false, data: [], message: "invalid role for admin" }))

}
const customer = (req, res, next) => {
    let token = getToken(req.headers)
    return verify(token, "customer")
        .then(d => {
            req.id = d.id
            return next()
        })
        .catch(e => res.status(404).json({ status: false, data: [], message: "invalid role for admin" }))
}

const getRole = req => {
    return new Promise((resolve, reject) => {
        let token = getToken(req)
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                reject(err)
            }
            else {
                console.log(user)
                resolve(user)
            }
        })
    })
}

const metrics = (req,res,next) => {
    next()
}



module.exports = {
    admin,
    customer,
    sign,
    verify,
    metrics,
    getRole
}