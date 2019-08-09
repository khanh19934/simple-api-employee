const controller = require('../controllers')

const {employeeController} = controller


const employeeRoutes = (app) => {
    app.get('/employee/:id',employeeController.getEmployeeInfo)
    app.get('/all-employee',employeeController.getAllEmployee)
    app.post('/create-employee', employeeController.createEmployee)
    app.put('/employee/:id', employeeController.updateEmployee)
    app.delete('/employee/:id', employeeController.deleteEmployee)
}

module.exports = employeeRoutes