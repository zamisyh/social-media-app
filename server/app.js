const { express, cors, colors, http, env, bodyParser } = require('./libs/package')
const connectDB = require('./config/connection')
const auth = require('./routers/auth.router')


// Call Env
env.config({
    path: './config/config.env'
})

// Make connection to mongodb
connectDB();

const app = express()
app.use(express.json({
    limit: '30mb',
    extended: true
}))

app.use(cors({
    origin: '*'
}))


app.use('/api/v1/auth', auth)
app.all('*', (req, res) => {
    res.send({
        status: 404,
        message: "The router or endpoint you entered was not found"
    })
})

const server = http.createServer(app)
server.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${process.env.PORT}`.yellow.bold)
})