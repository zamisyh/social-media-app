const { getUserId, updateUserId } = require('../controllers/user.controller');
const { express } = require('../libs/package')
const router = express.Router();

router.get('/:id', getUserId)
router.put('/:id', updateUserId)


module.exports = router