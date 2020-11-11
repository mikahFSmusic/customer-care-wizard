import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: "us-east-1",
});

// get these types fixed
const fileFilter = (req: any, file: any, callback: any) => {
  console.log("filtering file")
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    callback(
      new Error("Invalid file type, only JPEG and PNG is allowed!"),
      false
    );
  }
};

export const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: "maisonettedamagedefect",
    metadata: function (req, file, callback) {
      callback(null, { fieldName: "TESTING_METADATA" });
    },
    key: function (req, file, callback) {
      callback(null, Date.now().toString());
    },
  }),
})