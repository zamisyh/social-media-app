const { createPost, getIdPost, updatePostId, deletePostId } = require('../controllers/post.controller')
const { express } = require('../libs/package')
const router = express.Router()

router.post('/create', createPost)
router.get('/:id', getIdPost)
router.put('/:id', updatePostId)
router.delete('/:id', deletePostId)

module.exports = router