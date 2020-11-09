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
exports.addDamagedDefect = void 0;
const damaged_defect_1 = __importDefault(require("../../models/damaged_defect"));
const addDamagedDefect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const file = req.file;
        console.log(body);
        console.log(file);
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
            // image1: { data: fs.readFileSync(path.join(__dirname + '/uploads' + req.file.filename)) },
            // image2: { data: fs.readFileSync(path.join(__dirname + '/uploads' + req.file.filename)) },
            // image3: { data: fs.readFileSync(path.join(__dirname + '/uploads' + req.file.filename)) }
            image1: file
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
});
exports.addDamagedDefect = addDamagedDefect;
