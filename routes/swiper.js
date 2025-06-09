const path =  require('path');
var router = express.Router();
const swiperController = require('../controller/swiper');


const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,'public/uploads')
    },
    filename(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage})
router.post('/',upload.single('file'),swiperController.create);
