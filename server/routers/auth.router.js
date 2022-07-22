const { userRegister } = require('../controllers/user.controller')
const { express } = require('../libs/package')
const router = express.Router()

router.post('/register', userRegister)

module.exports = router