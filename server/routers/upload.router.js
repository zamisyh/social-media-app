const { express } = require('../libs/package')
const { multerUpload } = require('../middleware/multer.middleware')
const router = express.Router()


router.post('/', multerUpload.single('file'), (req, res) => {
    if (req.file) {
        res.json(req.file)
    } else {
        throw 'error'
    }
})

module.exports = router

