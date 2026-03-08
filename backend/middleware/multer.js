import multer from "multer"

// Configure storage settingsfor multer
let storage = multer.diskStorage({

    // Set destination folder where uploaded files will be stored
    destination:(req,file,cb)=>{

        // cb(error, folderPath)
        cb(null , "./public")   //file saved in public folder
    },

    // Set custom file name for uploaded files
    filename:(req,file,cb)=>{
        cb(null, Date.now() + "-" + file.originalname)
    }
})

// Create multer instance with defined storage configuration
const upload = multer({storage})

export default upload