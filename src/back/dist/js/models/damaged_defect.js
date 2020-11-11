"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DamagedDefectSchema = new mongoose_1.Schema({
    purchaseReceived: {
        type: String,
    },
    orderNumber: {
        type: String,
    },
    vendor: {
        type: String,
    },
    skuNumber: {
        type: String,
    },
    damageLevel: {
        type: String,
    },
    offerDiscount: {
        type: String,
    },
    refundAmount: {
        type: String,
    },
    narvarReturn: {
        type: String,
    },
    itemAmount: {
        type: String,
    },
    damageDescription: {
        type: String,
    },
    actionNeeded: {
        type: String,
    },
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("damaged_defect", DamagedDefectSchema);
