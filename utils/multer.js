import multer from "multer";
import path from 'path'

const upload= multer(
    {
        storage:multer.diskStorage({}),
        filename:(req,file,cb)=>{
            cb(nul,file.originalname)
        },
        fileFilter:(req,file,cb)=>{
            let extention= path.extname(file.originalname)
            if(!extention === '.jpg' && !extention ==='.jpeg' && extention === '.png'){
                cb(new Error('Unsupport file',false))
                return;
            }
            cb (null,true);
        }
    }
    )

export default upload