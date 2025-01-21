const {Router} = require("express")
const router = Router()
const {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    editEmployee,
    deleteEmployee
} = require("./../controllers/employees.controller.js")


router
    .get("/employees", getAllEmployees)
    .get("/employees/:id", getEmployeeById)
    .post("/employees", addEmployee)
    .put("/employees/:id", editEmployee)
    .delete("/employees/:id", deleteEmployee)

module.exports =  router 