import multer from 'multer';

const storage = multer.memoryStorage();  // Store files in memory (can also use disk storage)

const thumbUpload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },  // 5MB file size limit
});

export default thumbUpload;
