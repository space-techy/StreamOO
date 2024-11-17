import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from "path";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${MOVIE_UPLOAD_URL}/public/uploads`);
    },
    filename: function (req, file, cb) {
        const newFileName = file.fieldname + "-" + uuidv4() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});

const upload = multer({ storage: storage });

export default upload;