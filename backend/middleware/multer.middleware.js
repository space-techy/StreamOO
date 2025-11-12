import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import fs from "fs";

const UPLOAD_PATH = path.resolve("./public/uploads");
if (!fs.existsSync(UPLOAD_PATH)) {
  fs.mkdirSync(UPLOAD_PATH, { recursive: true });
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH);
    },
    filename: function (req, file, cb) {
        const newFileName = file.fieldname + "-" + uuidv4() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});

const upload = multer({ storage: storage });

export default upload;
