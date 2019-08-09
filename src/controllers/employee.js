const Employee = require('../models/Employee')
const {generalErrorHandling} = require('../utils/error-handling')


const employeeController = {
    getEmployeeInfo: async (req, res) => {
        try {
            const {id} = req.params
            if (id === undefined) {
                res.send({
                    data: null,
                    error: "Can not find id"
                })
                return
            }
            const employeeDetail = await Employee.findById(id)
            res.status(200)
            res.send({
                data: employeeDetail
            })
        } catch (e) {
            res.status(500)
            res.send(generalErrorHandling(500))
        }
    },
    getAllEmployee: async (req, res) => {

        try {
            const allEmployee = await Employee.find({})
            res.status(200)
            res.send({
                data: allEmployee
            })
        } catch (e) {
            res.status(500)
            res.send(generalErrorHandling(500))
        }
    },
    createEmployee: async (req, res) => {
        try {
            const body = req.body
            const newEmployee = new Employee({
                name: body.name
            })
            const responseAfterSave = await newEmployee.save()
            res.status(200)
            res.send({
                data: responseAfterSave
            })
        } catch (e) {
            res.status(500)
            res.send(generalErrorHandling(500))
        }
    },
    updateEmployee: async (req, res) => {
        try {
            const {id} = req.params
            if (id === undefined) {
                res.send({
                    data: null,
                    error: "Can not find id"
                })
                return
            }
            const body = req.body
            const updatedEmployee = await Employee.findOneAndUpdate({_id: id}, {name: body.name}, {new: true})
            res.status(200)
            res.send({
                data: updatedEmployee
            })
        } catch (e) {
            res.status(500)
            res.send(generalErrorHandling(500))
        }
    },
    deleteEmployee: async (req, res) => {
        try {
            const {id} = req.params
            if (id === undefined) {
                res.send({
                    data: null,
                    error: "Can not find id"
                })
                return
            }
            const foundEmployee = await Employee.findOne({_id: id})
            if(foundEmployee === null) {
                res.status(500)
                res.send(generalErrorHandling(500))
                return
            }
            await Employee.findOneAndDelete({_id: id})
            res.send({
                data: 'Success'
            })
        } catch (e) {
            res.status(500)
            res.send(generalErrorHandling(500))
        }
    }
}

module.exports = employeeController