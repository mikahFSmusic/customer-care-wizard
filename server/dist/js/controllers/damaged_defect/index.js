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
exports.sendEmail = exports.deleteDamagedDefect = exports.updateDamagedDefect = exports.addDamagedDefect = exports.getAllDamagedDefects = exports.uploadDamageImage = void 0;
const damaged_defect_1 = __importDefault(require("../../models/damaged_defect"));
const image_upload_1 = require("../../services/image_upload");
const email_1 = require("../../services/email");
///////////////
// AMAZON S3 //
///////////////
const arrayUpload = image_upload_1.upload.array("images", 3);
const uploadDamageImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let files = req.files;
        arrayUpload(req, res, function (error) {
            if (error) {
                return res.json({
                    success: false,
                    errors: {
                        title: "Image upload error",
                        detail: error.message,
                        error: error
                    }
                });
            }
            else {
                return res.json({
                    success: true,
                    images: files
                });
            }
        });
    }
    catch (error) {
        throw error;
    }
});
exports.uploadDamageImage = uploadDamageImage;
/////////////
// MONGODB //
/////////////
// Get all DD submissions
const getAllDamagedDefects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const damagedDefects = yield damaged_defect_1.default.find();
        res.status(200).json({ damagedDefects });
    }
    catch (error) {
        throw error;
    }
});
exports.getAllDamagedDefects = getAllDamagedDefects;
// Add new DD form
const addDamagedDefect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const file = req.file;
        console.log(body);
        console.log(file);
        const damagedDefect = new damaged_defect_1.default({
            customerData: body.customerData,
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
            images: body.images
        });
        const newDamagedDefect = yield damagedDefect.save();
        res.status(201).json({ message: "Form submitted", newDamagedDefect });
        console.log("form submitted to server");
    }
    catch (error) {
        throw error;
    }
});
exports.addDamagedDefect = addDamagedDefect;
// Update DD form
const updateDamagedDefect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateDamagedDefect = yield damaged_defect_1.default.findByIdAndUpdate({ _id: id }, body);
        const allDamagedDefects = yield damaged_defect_1.default.find();
        res.status(200).json({
            message: "Damaged Defect Submission Updated",
            damagedDefect: updateDamagedDefect,
            damagedDefects: allDamagedDefects,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateDamagedDefect = updateDamagedDefect;
// Delete DD form entry
const deleteDamagedDefect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDamagedDefect = yield damaged_defect_1.default.findByIdAndRemove(req.params.id);
        const allDamagedDefects = yield damaged_defect_1.default.find();
        res.status(200).json({
            message: "Damaged Defect Entry Deleted.",
            damagedDefect: deletedDamagedDefect,
            damagedDefects: allDamagedDefects,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteDamagedDefect = deleteDamagedDefect;
////////////////
// Nodemailer //
////////////////
// send an email
const sendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        email_1.ddEmail();
    }
    catch (error) {
        throw error;
    }
});
exports.sendEmail = sendEmail;
