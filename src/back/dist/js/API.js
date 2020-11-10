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
exports.deleteDamagedDefect = exports.updateDamagedDefect = exports.getAllDamagedDefects = exports.addDamagedDefect = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = "http://localhost:4000";
exports.addDamagedDefect = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const damagedDefect = {
            purchaseReceived: formData.purchaseReceived,
            orderNumber: formData.orderNumber,
            vendor: formData.vendor,
            skuNumber: formData.skuNumber,
            damageLevel: formData.damageLevel,
            offerDiscount: formData.offerDiscount,
            refundAmount: formData.refundAmount,
            narvarReturn: formData.narvarReturn,
            itemAmount: formData.itemAmount,
            damageDescription: formData.damageDescription,
            actionNeeded: formData.actionNeeded,
            image1: formData.image1,
            image2: formData.image2,
            image3: formData.image3
        };
        const saveDamagedDefect = yield axios_1.default.post(baseUrl + "/submit-damaged-defect", damagedDefect);
        return saveDamagedDefect;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getAllDamagedDefects = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const damagedDefects = yield axios_1.default.get(baseUrl + "/damaged-defects");
        return damagedDefects;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateDamagedDefect = (damagedDefect, formData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const damagedDefectUpdate = {
            purchaseReceived: formData.purchaseReceived,
            orderNumber: formData.orderNumber,
            vendor: formData.vendor,
            skuNumber: formData.skuNumber,
            damageLevel: formData.damageLevel,
            offerDiscount: formData.offerDiscount,
            refundAmount: formData.refundAmount,
            narvarReturn: formData.narvarReturn,
            itemAmount: formData.itemAmount,
            damageDescription: formData.damageDescription,
            actionNeeded: formData.actionNeeded,
            image1: formData.image1,
            image2: formData.image2,
            image3: formData.image3
        };
        const updatedDamagedDefect = yield axios_1.default.put(`${baseUrl}/update-damaged-defect/${damagedDefect._id}`, damagedDefectUpdate);
        return updatedDamagedDefect;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.deleteDamagedDefect = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDamagedDefect = yield axios_1.default.delete(`${baseUrl}/delete-damaged-defect/${_id}`);
        return deletedDamagedDefect;
    }
    catch (error) {
        throw new Error(error);
    }
});
