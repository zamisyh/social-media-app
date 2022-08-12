const { multer, path } = require('../libs/package')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('./uploads/images'))
    },
    filename: function(req, file, cb){
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, req.body.name)
    }
})

const multerUpload = multer({
    storage: storage
})

module.exports = {multerUpload}