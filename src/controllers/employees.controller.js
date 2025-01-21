const { pool } = require("../db/db.js")

// Obtener empleados
const getAllEmployees =  async (req, res) => {
    try {

        const [results] = await pool
            .promise()
            .query("SELECT * FROM employee");

        if (results.length > 0) {
            res.status(200).json({ 
                message: "Employees showed", 
                employees: results
            });
        } else {
            res.status(404).json({ 
                message: "There is no employees D:" 
            });
        }

    } catch (error) {

        console.error(error);
        res.status(500).json({ 
            message: "Error fetching all employees", 
            error: error.message 
        });
    }
}

// Obtener empleado por Id
const getEmployeeById =  async (req, res) => {
    const idEmployee = req.params.id;
    try {

        const [result] = await pool
            .promise()
            .query("SELECT * FROM employee WHERE id = ?", [idEmployee]);

        if (result.length > 0) {
            res.status(200).json({ 
                message: "Employee found", 
                employees: result 
            });
        } else {
            res.status(404).json({ 
                message: "There is no employee with the given ID" 
            });
        }

    } catch (error) {

        console.error(error);
        res.status(500).json({ 
            message: "Error fetching the employee", 
            error: error.message 
        });
    }
}

// Agregar empleado
const addEmployee = async (req, res) => {
    try {

        const dataEmployee = req.body;
        const name = dataEmployee.name;
        const salary = parseInt(dataEmployee.salary);

        const [result] = await pool
            .promise()
            .query("INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]);

        res.status(201).json({ 
            message: "Empleado registrado exitosamente", 
            id: result.insertId 
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({ 
            message: "Error al registrar el empleado", 
            error: error.message 
        });
    }   
}

// Modificar empleado
const editEmployee = async (req, res) => {
    const idEmployee = req.params.id;

    try {

        const dataEmployee = req.body;
        const name = dataEmployee.name;
        const salary = parseInt(dataEmployee.salary);

        const [result] = await pool
            .promise()
            .query("UPDATE employee SET name = ?, salary = ? WHERE id = ?", [name, salary, idEmployee]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                message: "Employee updated successfully",
                updatedEmployee: { id: idEmployee, name, salary },
            });
        } else {
            res.status(404).json({
                message: "No employee found with the given ID",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error updating employee",
            error: error.message,
        });
    }
}

// Eliminar empleado
const deleteEmployee =  async (req, res) => {
    const idEmployee = req.params.id
    try {
        const [result] = await pool
            .promise()
            .query("DELETE FROM employee WHERE id = ?", [idEmployee]);

        if (result.affectedRows > 0) {
            res.status(200).json({ 
                message: "Employee deleted successfully", 
                id: idEmployee 
            });
        } else {
            res.status(404).json({ 
                message: "No employee found with the given ID" 
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: "Internal error", 
            error: error.message 
        });
    }
}

// Exportar métodos
module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    editEmployee,
    deleteEmployee
}