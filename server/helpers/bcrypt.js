const { bcrypt } = require('../libs/package')

exports.hashPassword = async (password = new String(), salt) => {
    const res = await bcrypt.hash(password, salt)
    return res
}

exports.comparePassword = async (password, hashPassword) => {
    const res = await bcrypt.compare(password, hashPassword)
    return res;
}