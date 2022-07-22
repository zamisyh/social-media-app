const { json } = require("body-parser")

const result = (status, success = true, data, message) => {
    let obj = new Object()

    obj = {
        type: 'object',
        status: status,
        properties: {
            success: success,
            message: message,
            data: data
        }
    }

    return obj
}

module.exports = result;