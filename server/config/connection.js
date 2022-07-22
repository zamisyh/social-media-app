const { mongoose, colors } = require('../libs/package')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL+"/"+process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Connection Error : ${error.message}`.red.underline.bold)
    }
}

module.exports = connectDB;