const { 
    getUserId, 
    updateUserId, 
    deleteUserId, 
    getAllUser, 
    followUser
} = require('../controllers/user.controller');

const { express } = require('../libs/package')
const router = express.Router();

router.get('/:id', getUserId)
router.put('/:id', updateUserId)
router.delete('/:id', deleteUserId)
router.get('/', getAllUser)
router.put('/:id/follow', followUser)


module.exports = router