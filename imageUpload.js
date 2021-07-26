const multerS3 = require('multer-s3')
const aws = require("aws-sdk")
const multer = require("multer")
require('dotenv').config()

// aws credentials 

aws.config.update({
  accessKeyId: process.env.access_key_id,
  secretAccessKey: process.env.secret_access_key,
  region: process.env.aws_region
  
})  

// s3 instance
const s3 = new aws.S3(); 


// upload function
const uploadImage = multer({
    storage: multerS3({
      s3: s3,
      bucket: aws_bucketname,
      acl : "public-read",
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })
   
  
  git

module.exports = uploadImage