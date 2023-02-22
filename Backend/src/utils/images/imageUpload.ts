import multer from 'multer'
import { resolve } from'path'
import { existsSync, unlink } from 'fs'
import { Request, Response } from 'express'
import { Callback } from 'mongoose'
import HttpException from '../../Services/HttpException'

class Upload {
    static diskStorage = multer.diskStorage({
        destination: (req: Request, file: Express.Multer.File, done: Callback) => {
            if (!file) return done(new HttpException(400, 'Upload file error'), null)
    
            const fileExits = existsSync(resolve(process.cwd(), `src/public/${file.originalname}`))
            if (!fileExits) return done(null, resolve(process.cwd(), 'src/public'))
    
            unlink(resolve(process.cwd(), `src/public/${file.originalname}`), (error) => {
                return done(null, resolve(process.cwd(), 'src/public'))
            })
        },
        filename: (req: Request, file: Express.Multer.File, done: Callback) => {
            if (file) {
                const extFile = file.originalname.replace('.', '')
                const extPattern = /(jpg|jpeg|png)/gi.test(extFile)
                if (!extPattern) return done(new TypeError('File format is not valid'), null)
                // req.images = file.originalname
                return done(null, file.originalname)
            }
        }
    })
}

const fileUpload = multer({ storage: Upload.diskStorage })

export default  fileUpload