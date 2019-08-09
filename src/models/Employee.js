const mongoose = require('mongoose')

/**
 * @swagger
 * definitions:
 *  Employee:
 *      type: Object
 *      properties:
 *          id:
 *              type: string
 *          name:
 *              type: string
 *          required:
 *              - name
 */

const EmployeeSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model('Employee', EmployeeSchema)