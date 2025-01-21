const express = require("express")
const employeesRoutes = require("./routes/employees.routes.js")
const indexRoutes = require("./routes/index.routes.js")

const app = express()
app.use(express.json())

app.use(employeesRoutes)
app.use(indexRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    })
})

module.exports = { app }