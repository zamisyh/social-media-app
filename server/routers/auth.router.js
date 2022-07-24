const { userRegister, userLogin } = require('../controllers/auth.controller')
const { express } = require('../libs/package')
const router = express.Router()

router.post('/register', userRegister)
router.post('/login', userLogin)

module.exports = router