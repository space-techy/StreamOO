import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "https://oayn5yq778aqs6kj.public.blob.vercel-storage.com/");
    },
    filename: function (req, file, cb) {
        const newFileName = file.fieldname + "-" + uuidv4() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});

const upload = multer({ storage: storage });

export default upload;