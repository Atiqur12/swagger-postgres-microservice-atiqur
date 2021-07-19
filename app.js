const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'RestFul CRUD for 2 roles admin and customer using get,post,patc,delete on role based auth',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Atiqur Rehman',
      url: 'http://localhost:3000/profile',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Express Managed Cloud Server on Postgres',
    },
  ],
};
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);



const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const PORT = require("./config").port

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const metrics = (req, res, next) => {
  let a = require("./config").metrics
  let {url,method}=req
  if (url == "/login" || url == "/" ||url.startsWith("/docs")) {
    next()
  }
  else {
    if (/[0-9]/g.test(url) == true) {
      url = url.split("/").reverse().slice(1,).reverse().join("/")
    }
    require("./services").getRole(req)
      .then(d => d.role)
      .then(role => {
        
        if (a.some(item => item.page == url && item.method == method && item[role]==true )== true) {
          next()
        }
        else
        {
          res.status(404).json({ status: false, data: [], error:"invalid token" })
        }
      })
      .catch(e => res.status(404).json({ status: false, data: [], error: e }))
  }
}

const db = require("./database/index");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});



const indexRouter = require("./routes/index")
const adminRouter = require("./routes/admin")
const customerRouter = require("./routes/customer")
const delieveredRouter = require("./routes/delievered")
const orderedRouter = require("./routes/ordered")
const notificationRouter = require("./routes/notification")
const loginRouter = require("./routes/login")

const middleware = require("./services").metrics



app.use("/", indexRouter)
app.use("/profile", (req, res) => res.sendFile(__dirname + "/my-profile.html"))
app.use("/login", loginRouter)
app.use("/admin",metrics,middleware, adminRouter)
app.use("/customer",metrics, middleware, customerRouter)
app.use("/delievered",metrics, middleware, delieveredRouter)
app.use("/ordered",metrics, middleware, orderedRouter)
app.use("/notification",metrics, middleware, notificationRouter)

app.listen(PORT, () => console.log(`
server running at: http://localhost:${PORT} 
for documentation kindly visit http://localhost:${PORT}/docs
`
))

