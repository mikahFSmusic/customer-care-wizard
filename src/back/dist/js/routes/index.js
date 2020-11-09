"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { addDamagedDefect } from '../controllers/damaged_defect'
const path_1 = __importDefault(require("path"));
const multer_gridfs_storage_1 = __importDefault(require("multer-gridfs-storage"));
const damaged_defect_1 = __importDefault(require("../models/damaged_defect"));
const crypto_1 = __importDefault(require("crypto"));
const multer_1 = __importDefault(require("multer"));
require('dotenv/config');
const router = express_1.Router();
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@maisonettecluster0.p8m37.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const storage = new multer_gridfs_storage_1.default({
    url: uri,
    file: (req, file) => {
        console.log("file being stored.");
        return new Promise((resolve, reject) => {
            crypto_1.default.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path_1.default.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'dduploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer_1.default({ storage });
router.post('/submit-damaged-defect', upload.array('file', 1), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const files = req.files;
        console.log(body);
        console.log(files);
        const damagedDefect = new damaged_defect_1.default({
            purchaseReceived: body.purchaseReceived,
            orderNumber: body.orderNumber,
            vendor: body.vendor,
            skuNumber: body.skuNumber,
            damageLevel: body.damageLevel,
            offerDiscount: body.offerDiscount,
            refundAmount: body.refundAmount,
            narvarReturn: body.narvarReturn,
            itemAmount: body.itemAmount,
            damageDescription: body.damageDescription,
            actionNeeded: body.actionNeeded,
            image1: req.files
        });
        const newDamagedDefect = yield damagedDefect.save();
        res
            .status(201)
            .json({ message: "Form submitted", newDamagedDefect });
        console.log("form submitted to server");
    }
    catch (error) {
        throw error;
    }
}));
exports.default = router;
