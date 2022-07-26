const { getUserId, updateUserId, deleteUserId } = require('../controllers/user.controller');
const { express } = require('../libs/package')
const router = express.Router();

router.get('/:id', getUserId)
router.put('/:id', updateUserId)
router.delete('/:id', deleteUserId)


module.exports = router