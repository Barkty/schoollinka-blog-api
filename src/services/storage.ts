import multer from "multer"
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary"
import { Request } from "express";
import dotenv from "dotenv";

dotenv.config()

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env

const fileFilter = (req: Request, file: any, cb: any) => {
    const acceptedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp', "image/svg+xml"]
    if (acceptedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb("Error: CSV|Excel only");
    }
};

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true
});
    
const cloudinaryStorage = new CloudinaryStorage({ cloudinary: cloudinary });
    
export default cloudinaryStorage;

export const uploadImage = multer({ 
    storage: cloudinaryStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});