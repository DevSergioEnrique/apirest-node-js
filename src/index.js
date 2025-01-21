const { app } = require("./app.js")
const { PORT }= require("./config/config.js")

app.listen(PORT)
console.log("Server is running in port ", PORT)