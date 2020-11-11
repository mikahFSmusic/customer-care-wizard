"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const s3 = new aws_sdk_1.default.S3();
aws_sdk_1.default.config.update({
    secretAccessKey: process.env.S3_ACCESS_SECRET,
    accessKeyId: process.env.S3_ACCESS_KEY,
    region: "us-east-1",
});
// get these types fixed
const fileFilter = (req, file, callback) => {
    console.log("filtering file");
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true);
    }
    else {
        callback(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};
exports.upload = multer_1.default({
    fileFilter,
    storage: multer_s3_1.default({
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
});
