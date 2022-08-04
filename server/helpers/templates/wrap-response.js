const { json } = require("body-parser")

const result = (status, success, data, message, token) => {
    let obj = new Object()

    if (token === undefined ) {
        obj = {
            type: 'object',
            status: status,
            properties: {
                success: success,
                message: message,
                data: data
            }
        }
    } else {
        obj = {
            type: 'object',
            status: status,
            properties: {
                token: token,
                success: success,
                message: message,
                data: data
            }
        }
    }

    return obj
}

module.exports = result;