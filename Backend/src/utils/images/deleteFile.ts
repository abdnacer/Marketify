import * as fs from 'fs'
import { Request } from 'express'

class deleteImage {
    public deleteFile = (imagePath: string) => {
        try {
            fs.unlinkSync('public/' + imagePath)
            // console.log('Deleted image:', imagePath)
          } catch (err) {
            console.log('Error deleting image:', err)
          }
    };
}

const imageDelete = new deleteImage()

export default imageDelete
